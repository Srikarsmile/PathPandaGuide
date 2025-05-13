import { useState } from "react";
import { 
  ComposableMap, 
  Geographies, 
  Geography, 
  ZoomableGroup,
  Sphere,
  Graticule
} from "react-simple-maps";
import { scaleLinear } from "d3-scale";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// World topojson data - We'll use a simplified version
const geoUrl = "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

// Define the study disciplines
const disciplines = [
  { id: "engineering", name: "Engineering & Technology" },
  { id: "business", name: "Business & Management" },
  { id: "medicine", name: "Medicine & Health Sciences" },
  { id: "arts", name: "Arts & Humanities" },
  { id: "sciences", name: "Natural Sciences" },
  { id: "social", name: "Social Sciences" },
  { id: "cs", name: "Computer Science & IT" }
];

// Sample data for course popularity by country and discipline
// This would come from a real data source in a production environment
// Scores range from 0-5 (0=no data, 1=low, 5=high popularity/strength)
const popularityData = {
  engineering: {
    USA: 5, 
    GBR: 4.5, // UK
    DEU: 5, // Germany
    CAN: 4, 
    AUS: 3.5,
    FRA: 4, 
    JPN: 4.5,
    KOR: 4,
    SGP: 4.5, // Singapore
    CHE: 4.5, // Switzerland
    SWE: 4,
    NLD: 3.5, // Netherlands
    ITA: 3.5,
    CHN: 4.5,
    IND: 4,
    BRA: 3,
    RUS: 4
  },
  business: {
    USA: 5,
    GBR: 5,
    CHE: 4.5,
    SGP: 4.5,
    CAN: 4.5,
    AUS: 4,
    HKG: 4.5, // Hong Kong
    FRA: 4.5,
    ESP: 3.5, // Spain
    ITA: 3.5,
    NLD: 4,
    DEU: 4,
    JPN: 3.5,
    CHN: 4,
    DNK: 3.5, // Denmark
    SWE: 3.5,
    NOR: 3.5 // Norway
  },
  medicine: {
    USA: 5,
    GBR: 5,
    DEU: 4.5,
    CAN: 4.5,
    AUS: 4,
    SWE: 4.5,
    NLD: 4,
    CHE: 4.5,
    JPN: 4,
    FRA: 4,
    ITA: 3.5,
    BEL: 3.5, // Belgium
    ISR: 4, // Israel
    AUT: 3.5 // Austria
  },
  arts: {
    GBR: 5,
    USA: 4.5,
    FRA: 4.5,
    ITA: 4.5,
    AUT: 4,
    DEU: 4,
    JPN: 4,
    ESP: 4,
    NLD: 3.5,
    CAN: 3.5,
    AUS: 3.5,
    SWE: 3.5,
    CHE: 3.5
  },
  sciences: {
    USA: 5,
    GBR: 4.5,
    DEU: 4.5,
    FRA: 4,
    CHE: 4.5,
    CAN: 4,
    JPN: 4,
    SWE: 4,
    NLD: 4,
    AUS: 3.5,
    CHN: 4,
    RUS: 3.5,
    ITA: 3.5,
    ESP: 3,
    DNK: 3.5
  },
  social: {
    USA: 5,
    GBR: 5,
    CAN: 4.5,
    AUS: 4,
    NLD: 4.5,
    DEU: 4,
    SWE: 4,
    DNK: 3.5,
    NOR: 3.5,
    FRA: 3.5,
    CHE: 3.5,
    BEL: 3,
    ESP: 3,
    ITA: 3
  },
  cs: {
    USA: 5,
    GBR: 4.5,
    CAN: 4,
    CHE: 4.5,
    DEU: 4.5,
    SGP: 4.5,
    AUS: 4,
    NLD: 4,
    ISR: 4,
    CHN: 4,
    JPN: 4,
    KOR: 4,
    FRA: 3.5,
    FIN: 3.5, // Finland
    SWE: 4
  }
};

// University data by country for each discipline
// This would come from a real data source in a production environment
const universityData = {
  engineering: {
    USA: [
      { name: "Massachusetts Institute of Technology (MIT)", rank: 1 },
      { name: "Stanford University", rank: 2 },
      { name: "University of California, Berkeley", rank: 3 },
      { name: "California Institute of Technology (Caltech)", rank: 4 },
      { name: "Carnegie Mellon University", rank: 5 }
    ],
    GBR: [
      { name: "University of Cambridge", rank: 3 },
      { name: "University of Oxford", rank: 4 },
      { name: "Imperial College London", rank: 6 },
      { name: "University College London", rank: 10 }
    ],
    DEU: [
      { name: "Technical University of Munich", rank: 18 },
      { name: "RWTH Aachen University", rank: 20 },
      { name: "Technical University of Berlin", rank: 35 }
    ]
    // Other countries would be included similarly
  },
  business: {
    USA: [
      { name: "Harvard Business School", rank: 1 },
      { name: "Stanford Graduate School of Business", rank: 2 },
      { name: "Wharton School - University of Pennsylvania", rank: 3 },
      { name: "MIT Sloan School of Management", rank: 4 }
    ],
    GBR: [
      { name: "London Business School", rank: 2 },
      { name: "University of Oxford - Saïd Business School", rank: 10 },
      { name: "University of Cambridge - Judge Business School", rank: 11 }
    ]
    // Other countries would be included similarly
  }
  // Other disciplines would be included similarly
};

// Country codes to full names mapping
const countryNames = {
  USA: "United States",
  GBR: "United Kingdom",
  DEU: "Germany",
  FRA: "France",
  ITA: "Italy",
  ESP: "Spain",
  CHE: "Switzerland",
  NLD: "Netherlands",
  BEL: "Belgium",
  SWE: "Sweden",
  DNK: "Denmark",
  NOR: "Norway",
  FIN: "Finland",
  AUT: "Austria",
  CAN: "Canada",
  AUS: "Australia",
  JPN: "Japan",
  KOR: "South Korea",
  CHN: "China",
  SGP: "Singapore",
  HKG: "Hong Kong",
  IND: "India",
  ISR: "Israel",
  BRA: "Brazil",
  RUS: "Russia"
};

// Generate descriptions for why countries are popular for certain disciplines
// This would be actual researched content in a production environment
const popularityReasons = {
  engineering: {
    USA: "Home to many of the world's top engineering schools, with strong industry connections and research funding.",
    DEU: "Famous for precision engineering and partnerships with industry giants like BMW, Siemens, and Volkswagen."
  },
  business: {
    GBR: "London's position as a global financial hub creates exceptional opportunities for business students.",
    SGP: "Strategic location as Asia's business hub with strong connections to global markets."
  }
  // Other disciplines and countries would have similar descriptions
};

export default function CoursePopularityMap() {
  const [selectedDiscipline, setSelectedDiscipline] = useState("engineering");
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [position, setPosition] = useState<{ coordinates: [number, number]; zoom: number }>({ coordinates: [0, 10] as [number, number], zoom: 1 });

  // Get data for the selected discipline
  const disciplineData = popularityData[selectedDiscipline as keyof typeof popularityData] || {};
  
  // Create a color scale based on popularity scores (1-5)
  const colorScale = scaleLinear<string>()
    .domain([1, 5])
    .range(["#e0f2fe", "#1d4ed8"]) // Light blue to dark blue
    .clamp(true);
  
  // Find top countries for the selected discipline
  const topCountries = Object.entries(disciplineData)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([code, score]) => ({
      code,
      name: countryNames[code as keyof typeof countryNames] || code,
      score
    }));
  
  // Handle map zoom
  const handleZoomIn = () => {
    if (position.zoom >= 4) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom * 1.5 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition(pos => ({ ...pos, zoom: pos.zoom / 1.5 }));
  };

  const handleMoveEnd = (position: { coordinates: [number, number]; zoom: number }) => {
    setPosition(position);
  };
  
  // Get university data for the selected country and discipline
  const getUniversities = () => {
    if (!selectedCountry) return [];
    
    const universities = 
      universityData[selectedDiscipline as keyof typeof universityData]?.[
        selectedCountry as keyof (typeof universityData)[keyof typeof universityData]
      ];
    
    return universities || [];
  };

  return (
    <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-xl overflow-hidden">
      <div className="bg-gradient-to-r from-panda-purple to-panda-pink p-6 md:p-10">
        <h2 className="text-3xl font-bold text-white mb-2">Global Course Popularity Map</h2>
        <p className="text-white/90">
          Explore which countries excel in different academic disciplines.
          Select a field of study to see where it's most popular.
        </p>
      </div>
      
      <div className="p-6">
        <div className="mb-8">
          <label htmlFor="discipline-select" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Select Field of Study
          </label>
          <Select 
            value={selectedDiscipline} 
            onValueChange={(value) => {
              setSelectedDiscipline(value);
              setSelectedCountry(null);
            }}
          >
            <SelectTrigger className="w-full md:w-[320px]">
              <SelectValue placeholder="Select a discipline" />
            </SelectTrigger>
            <SelectContent>
              {disciplines.map(discipline => (
                <SelectItem key={discipline.id} value={discipline.id}>
                  {discipline.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 relative">
            <div className="flex justify-end mb-4 space-x-2">
              <Button
                onClick={handleZoomIn}
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span className="sr-only">Zoom in</span>
              </Button>
              <Button
                onClick={handleZoomOut}
                variant="outline"
                size="sm"
                className="w-8 h-8 p-0"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                <span className="sr-only">Zoom out</span>
              </Button>
            </div>
            
            <div style={{ height: "500px" }}>
              <ComposableMap
                projectionConfig={{
                  rotate: [-10, 0, 0],
                  scale: 147
                }}
              >
                <ZoomableGroup
                  zoom={position.zoom}
                  center={position.coordinates as [number, number]}
                  onMoveEnd={handleMoveEnd}
                >
                  <Sphere stroke="#DDD" strokeWidth={0.5} />
                  <Graticule stroke="#DDD" strokeWidth={0.5} />
                  <Geographies geography={geoUrl}>
                    {({ geographies }: { geographies: Array<any> }) =>
                      geographies.map((geo: any) => {
                        // Get the country code
                        const countryCode = geo.properties.iso_a3;
                        
                        // Get the popularity score for this country and discipline
                        const score = disciplineData[countryCode as keyof typeof disciplineData];
                        
                        // Determine the color based on the score
                        const fillColor = score ? colorScale(score) : "#F5F5F5";
                        
                        return (
                          <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            onClick={() => {
                              setSelectedCountry(countryCode);
                            }}
                            style={{
                              default: {
                                fill: fillColor,
                                stroke: "#FFF",
                                strokeWidth: 0.5,
                                outline: "none"
                              },
                              hover: {
                                fill: "#1e40af",
                                stroke: "#FFF",
                                strokeWidth: 0.5,
                                outline: "none",
                                cursor: "pointer"
                              },
                              pressed: {
                                fill: "#1e3a8a",
                                stroke: "#FFF",
                                strokeWidth: 0.5,
                                outline: "none"
                              }
                            }}
                          />
                        );
                      })
                    }
                  </Geographies>
                </ZoomableGroup>
              </ComposableMap>
            </div>
            
            <div className="flex justify-center items-center space-x-12 mt-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#e0f2fe]"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">Less Popular</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-[#1d4ed8]"></div>
                <span className="text-xs text-gray-600 dark:text-gray-400">More Popular</span>
              </div>
            </div>
          </div>
          
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4">
                Top Countries for {disciplines.find(d => d.id === selectedDiscipline)?.name}
              </h3>
              <div className="space-y-3">
                {topCountries.map((country, index) => (
                  <div 
                    key={country.code}
                    className={`p-3 rounded-lg flex items-center justify-between cursor-pointer transition-colors ${
                      selectedCountry === country.code 
                        ? "bg-panda-purple/10 border border-panda-purple/30" 
                        : "bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-100 dark:border-gray-700"
                    }`}
                    onClick={() => setSelectedCountry(country.code)}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full bg-panda-purple/10 flex items-center justify-center mr-3 text-xs font-semibold text-panda-purple">
                        {index + 1}
                      </div>
                      <span className="font-medium">{country.name}</span>
                    </div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          className={`w-4 h-4 ${i < Math.floor(country.score) ? "text-panda-yellow" : "text-gray-300 dark:text-gray-600"}`} 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      {country.score % 1 !== 0 && (
                        <svg 
                          className="w-4 h-4 text-panda-yellow" 
                          fill="currentColor" 
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {selectedCountry && (
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle>
                    {countryNames[selectedCountry as keyof typeof countryNames] || selectedCountry}
                  </CardTitle>
                  <CardDescription>
                    {disciplines.find(d => d.id === selectedDiscipline)?.name} Programs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {getUniversities().length > 0 ? (
                    <>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        Top Universities for {disciplines.find(d => d.id === selectedDiscipline)?.name}:
                      </p>
                      <ul className="space-y-2 mb-4">
                        {getUniversities().map((uni, index) => (
                          <li key={index} className="flex items-start">
                            <Badge variant="outline" className="mr-2 mt-0.5">
                              #{uni.rank}
                            </Badge>
                            <span className="text-sm">{uni.name}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      University data not available for this selection.
                    </p>
                  )}
                  
                  {popularityReasons[selectedDiscipline as keyof typeof popularityReasons]?.[
                    selectedCountry as keyof (typeof popularityReasons)[keyof typeof popularityReasons]
                  ] && (
                    <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                      <p className="text-sm">
                        <span className="font-semibold">Why it's popular:</span> {" "}
                        {popularityReasons[selectedDiscipline as keyof typeof popularityReasons][
                          selectedCountry as keyof (typeof popularityReasons)[keyof typeof popularityReasons]
                        ]}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}