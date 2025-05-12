import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Home, Utensils, Bus, Coffee } from "lucide-react";

interface CostData {
  id: string;
  city: string;
  country: string;
  accommodationLow: number;
  accommodationHigh: number;
  foodLow: number;
  foodHigh: number;
  transportLow: number;
  transportHigh: number;
  entertainmentLow: number;
  entertainmentHigh: number;
  currency: string;
  currencySymbol: string;
}

const costOfLivingData: CostData[] = [
  {
    id: "london",
    city: "London",
    country: "United Kingdom",
    accommodationLow: 800,
    accommodationHigh: 1500,
    foodLow: 200,
    foodHigh: 500,
    transportLow: 100,
    transportHigh: 250,
    entertainmentLow: 100,
    entertainmentHigh: 300,
    currency: "GBP",
    currencySymbol: "£"
  },
  {
    id: "paris",
    city: "Paris",
    country: "France",
    accommodationLow: 800,
    accommodationHigh: 1600,
    foodLow: 250,
    foodHigh: 500,
    transportLow: 70,
    transportHigh: 200,
    entertainmentLow: 80,
    entertainmentHigh: 300,
    currency: "EUR",
    currencySymbol: "€"
  },
  {
    id: "newyork",
    city: "New York",
    country: "United States",
    accommodationLow: 1200,
    accommodationHigh: 2500,
    foodLow: 300,
    foodHigh: 600,
    transportLow: 120,
    transportHigh: 250,
    entertainmentLow: 150,
    entertainmentHigh: 400,
    currency: "USD",
    currencySymbol: "$"
  },
  {
    id: "tokyo",
    city: "Tokyo",
    country: "Japan",
    accommodationLow: 70000,
    accommodationHigh: 150000,
    foodLow: 40000,
    foodHigh: 80000,
    transportLow: 10000,
    transportHigh: 20000,
    entertainmentLow: 15000,
    entertainmentHigh: 40000,
    currency: "JPY",
    currencySymbol: "¥"
  },
  {
    id: "berlin",
    city: "Berlin",
    country: "Germany",
    accommodationLow: 600,
    accommodationHigh: 1200,
    foodLow: 200,
    foodHigh: 400,
    transportLow: 70,
    transportHigh: 150,
    entertainmentLow: 80,
    entertainmentHigh: 250,
    currency: "EUR",
    currencySymbol: "€"
  },
  {
    id: "sydney",
    city: "Sydney",
    country: "Australia",
    accommodationLow: 1200,
    accommodationHigh: 2000,
    foodLow: 300,
    foodHigh: 600,
    transportLow: 150,
    transportHigh: 300,
    entertainmentLow: 150,
    entertainmentHigh: 400,
    currency: "AUD",
    currencySymbol: "A$"
  },
  {
    id: "toronto",
    city: "Toronto",
    country: "Canada",
    accommodationLow: 1000,
    accommodationHigh: 1800,
    foodLow: 300,
    foodHigh: 600,
    transportLow: 120,
    transportHigh: 220,
    entertainmentLow: 120,
    entertainmentHigh: 300,
    currency: "CAD",
    currencySymbol: "C$"
  },
  {
    id: "singapore",
    city: "Singapore",
    country: "Singapore",
    accommodationLow: 800,
    accommodationHigh: 2000,
    foodLow: 300,
    foodHigh: 700,
    transportLow: 100,
    transportHigh: 200,
    entertainmentLow: 100,
    entertainmentHigh: 400,
    currency: "SGD",
    currencySymbol: "S$"
  },
  {
    id: "amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    accommodationLow: 800,
    accommodationHigh: 1500,
    foodLow: 250,
    foodHigh: 500,
    transportLow: 70,
    transportHigh: 150,
    entertainmentLow: 100,
    entertainmentHigh: 300,
    currency: "EUR",
    currencySymbol: "€"
  },
  {
    id: "barcelona",
    city: "Barcelona",
    country: "Spain",
    accommodationLow: 600,
    accommodationHigh: 1200,
    foodLow: 200,
    foodHigh: 400,
    transportLow: 50,
    transportHigh: 120,
    entertainmentLow: 80,
    entertainmentHigh: 200,
    currency: "EUR",
    currencySymbol: "€"
  }
];

export default function CostCalculator() {
  const [selectedCity, setSelectedCity] = useState<string>("");
  const [accommodationValue, setAccommodationValue] = useState<number>(0);
  const [foodValue, setFoodValue] = useState<number>(0);
  const [transportValue, setTransportValue] = useState<number>(0);
  const [entertainmentValue, setEntertainmentValue] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);
  const [cityData, setCityData] = useState<CostData | null>(null);

  useEffect(() => {
    if (selectedCity) {
      const data = costOfLivingData.find(city => city.id === selectedCity);
      if (data) {
        setCityData(data);
        
        // Set default values to mid-range
        setAccommodationValue(Math.floor((data.accommodationLow + data.accommodationHigh) / 2));
        setFoodValue(Math.floor((data.foodLow + data.foodHigh) / 2));
        setTransportValue(Math.floor((data.transportLow + data.transportHigh) / 2));
        setEntertainmentValue(Math.floor((data.entertainmentLow + data.entertainmentHigh) / 2));
      }
    }
  }, [selectedCity]);

  useEffect(() => {
    if (cityData) {
      const total = accommodationValue + foodValue + transportValue + entertainmentValue;
      setTotalCost(total);
    }
  }, [accommodationValue, foodValue, transportValue, entertainmentValue, cityData]);

  const formatCurrency = (value: number): string => {
    if (!cityData) return "";
    
    return `${cityData.currencySymbol}${value.toLocaleString()}`;
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Cost of Living Calculator</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Estimate your monthly expenses in different cities around the world to help plan your study abroad budget.
          </p>
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Select a City</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <Select onValueChange={setSelectedCity}>
                <SelectTrigger className="w-full md:w-[300px]">
                  <SelectValue placeholder="Choose a city" />
                </SelectTrigger>
                <SelectContent>
                  {costOfLivingData.map(city => (
                    <SelectItem key={city.id} value={city.id}>
                      {city.city}, {city.country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {cityData && (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Home className="h-5 w-5 text-panda-purple mr-2" />
                      <h3 className="text-lg font-medium">Accommodation</h3>
                    </div>
                    <span className="font-semibold text-lg">{formatCurrency(accommodationValue)}</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      value={[accommodationValue]}
                      min={cityData.accommodationLow}
                      max={cityData.accommodationHigh}
                      step={10}
                      onValueChange={(values) => setAccommodationValue(values[0])}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Shared room</span>
                      <span>Private apartment</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Utensils className="h-5 w-5 text-panda-pink mr-2" />
                      <h3 className="text-lg font-medium">Food</h3>
                    </div>
                    <span className="font-semibold text-lg">{formatCurrency(foodValue)}</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      value={[foodValue]}
                      min={cityData.foodLow}
                      max={cityData.foodHigh}
                      step={10}
                      onValueChange={(values) => setFoodValue(values[0])}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Mostly cooking</span>
                      <span>Eating out often</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Bus className="h-5 w-5 text-panda-lav mr-2" />
                      <h3 className="text-lg font-medium">Transportation</h3>
                    </div>
                    <span className="font-semibold text-lg">{formatCurrency(transportValue)}</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      value={[transportValue]}
                      min={cityData.transportLow}
                      max={cityData.transportHigh}
                      step={10}
                      onValueChange={(values) => setTransportValue(values[0])}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Public transit</span>
                      <span>Regular taxis/rideshare</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <Coffee className="h-5 w-5 text-panda-yellow mr-2" />
                      <h3 className="text-lg font-medium">Entertainment & Extras</h3>
                    </div>
                    <span className="font-semibold text-lg">{formatCurrency(entertainmentValue)}</span>
                  </div>
                  <div className="px-2">
                    <Slider
                      value={[entertainmentValue]}
                      min={cityData.entertainmentLow}
                      max={cityData.entertainmentHigh}
                      step={10}
                      onValueChange={(values) => setEntertainmentValue(values[0])}
                      className="my-6"
                    />
                    <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>Minimal</span>
                      <span>Active social life</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">Total Monthly Cost</h3>
                    <div className="text-2xl font-bold text-panda-purple dark:text-panda-lav">
                      {formatCurrency(totalCost)}
                      <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">/ month</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    This estimate includes basic living expenses. Additional costs may include tuition, health insurance, books, and travel.
                  </p>
                </div>
              </div>
            )}

            {!cityData && (
              <div className="text-center py-12">
                <Home className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">Select a city to calculate costs</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Choose a destination from the dropdown above to see estimated living costs.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}