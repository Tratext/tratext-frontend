"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { fetchPricing } from "@/lib/api";
import { languages, expertise } from "@/lib/constants";
import { GiCheckMark } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { ButtonList } from "./ui/button";
const tiers = {
  ai: { title: "AI + Post-editing", baseRate: 0.09, minimumRate: 40.0 },
  economy: { title: "Economy", baseRate: 0.14, minimumRate: 40.0 },
  excellent: { title: "Excellent", baseRate: 0.16, minimumRate: 50.0 },
  express: { title: "Express", baseRate: 0.18, minimumRate: 50.0 },
};

const usePricingCalculator = (
  fromLanguage,
  toLanguage,
  selectedExpertise,
  wordCount
) => {
  const [dynamicTiers, setDynamicTiers] = useState({});
  const [pricing, setPricing] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state

  const fetchAndCalculatePricing = useCallback(async () => {
    setLoading(true); // Set loading to true when fetching starts
    const filter = { from: fromLanguage, to: toLanguage };
    let prices = pricing;

    if (
      !pricing ||
      pricing.from !== fromLanguage ||
      pricing.to !== toLanguage
    ) {
      prices = await fetchPricing(filter);
      if (!prices) {
        setLoading(false); // Set loading to false if no pricing data is returned
        return;
      }
      setPricing(prices);
    }

    const { default_base_rate, minimum_rate, specified_area } = prices;
    const ratePerWord =
      specified_area.find((area) => area.area.includes(selectedExpertise))
        ?.base_rate || default_base_rate;

    const updatedTiers = Object.fromEntries(
      Object.entries(tiers).map(([key, data]) => {
        const calculatedPrice =
          minimum_rate[key] + ratePerWord[key] * wordCount;
        return [key, { ...data, calculatedPrice, baseRate: ratePerWord[key] }];
      })
    );

    setDynamicTiers(updatedTiers);
    setLoading(false); // Set loading to false after the data is fetched and calculations are done
  }, [fromLanguage, toLanguage, selectedExpertise, wordCount, pricing]);

  useEffect(() => {
    fetchAndCalculatePricing();
  }, [fetchAndCalculatePricing]);

  return { dynamicTiers, fetchAndCalculatePricing, loading }; // Return loading state
};

const PricingCalculator = ({
  title,
  from_text,
  to_text,
  expertise_text,
  word_count_text,
  plans,
}) => {
  const [fromLanguage, setFromLanguage] = useState(languages[1]);
  const [toLanguage, setToLanguage] = useState(languages[7]);
  const [selectedExpertise, setSelectedExpertise] = useState(expertise[0]);
  const [wordCount, setWordCount] = useState(1000);

  const { dynamicTiers, fetchAndCalculatePricing, loading } =
    usePricingCalculator(
      fromLanguage,
      toLanguage,
      selectedExpertise,
      wordCount
    );

  const handleWordCountChange = (value) => {
    const count = parseInt(value, 10);
    setWordCount(count > 0 ? count : 0);
  };

  return (
    <Card className="w-full max-w-6xl mx-auto">
      <CardContent className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6">{title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <LanguageSelector
            label={from_text}
            value={fromLanguage}
            onChange={setFromLanguage}
            options={languages}
            disabledOption={null}
          />
          <LanguageSelector
            label={to_text}
            value={toLanguage}
            onChange={setToLanguage}
            options={languages}
            disabledOption={fromLanguage}
          />
          <LanguageSelector
            label={expertise_text}
            value={selectedExpertise}
            onChange={setSelectedExpertise}
            options={expertise}
          />
          <div>
            <label className="block text-sm font-medium mb-2">
              {word_count_text}
            </label>
            <input
              type="number"
              value={wordCount}
              onChange={(e) => handleWordCountChange(e.target.value)}
              className="block w-full border rounded px-3 py-[5px]"
            />
          </div>
          {/* <div className="flex items-end justify-center">
            <button
              onClick={fetchAndCalculatePricing}
              className="block bg-[#389F5D] text-white py-2 px-4 rounded"
            >
              Calculate
            </button>
          </div> */}
        </div>

        {/* Show loader if loading */}
        {loading ? (
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-t-4 border-green-500 rounded-full animate-spin"></div>
          </div>
        ) : (
          <PricingTable dynamicTiers={dynamicTiers} plans={plans} />
        )}
      </CardContent>
    </Card>
  );
};

const LanguageSelector = ({
  label,
  value,
  onChange,
  options,
  disabledOption,
}) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue>{value}</SelectValue>
      </SelectTrigger>
      <SelectContent>
        {options.map((option) => (
          <SelectItem
            key={option}
            value={option}
            disabled={option === disabledOption}
          >
            {option}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  </div>
);

const PricingTable = ({ dynamicTiers, plans }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
      {Object.values(dynamicTiers).map(
        ({ baseRate, minimumRate, calculatedPrice }, idx) => (
          <div
            key={idx}
            className="bg-white rounded-[16px] pb-6 border border-[#CCCCCCCC] flex flex-col"
          >
            <h3 className="text-[16px] font-semibold text-white bg-[#389F5D] w-full md:max-w-[257px] px-4 p-3 mb-8 rounded-t-[8px]">
              {plans[idx]?.name}
            </h3>

            <div className="px-4 flex-grow">
              <div className="mb-5 flex justify-between items-center gap-2">
                <p className="text-sm text-gray-600">
                  {plans[idx]?.rate_per_word_text}
                </p>
                <p className="text-2xl font-bold text-blue-900">
                  €{baseRate.toFixed(2)}
                </p>
              </div>

              <div className="space-y-3 mb-8">
                {Object.entries(plans)[idx][1].features?.map(
                  (feature, featureIdx) => (
                    <div
                      key={featureIdx}
                      className="flex items-center justify-between gap-2"
                    >
                      <span className="text-sm text-gray-700">
                        {feature.feature}
                      </span>
                      <span className="text-[20px]">
                        {feature.available ? (
                          <GiCheckMark className="text-green-500 text-[18px]" />
                        ) : (
                          <RxCross2 className="text-red-500" />
                        )}
                      </span>
                    </div>
                  )
                )}
              </div>

              <div className="text-sm text-gray-600 space-y-2 mb-8">
                <div>
                  {plans[idx]?.minimum_rate_text}: €{minimumRate.toFixed(2)}
                </div>
                <div>
                  {plans[idx]?.total_price_text}: €{calculatedPrice.toFixed(2)}
                </div>
              </div>
            </div>

            {/* ButtonList positioned at the bottom center */}
            <div className="mt-auto flex justify-center">
              <ButtonList buttons={[plans[idx].quote]} />
            </div>
          </div>
        )
      )}
    </div>
  );
};


export default PricingCalculator;
