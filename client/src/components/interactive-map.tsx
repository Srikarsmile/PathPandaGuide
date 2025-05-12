import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  GraduationCap, 
  FileText, 
  DollarSign, 
  Globe, 
  Home, 
  Clock, 
  Building, 
  Languages 
} from "lucide-react";

interface Country {
  id: string;
  name: string;
  region: "europe" | "north-america" | "asia-pacific" | "middle-east" | "africa" | "latin-america";
  flagEmoji: string;
  topUniversities: string[];
  visaInfo: string;
  scholarships: string[];
  costOfLiving: string;
  languageRequirements: string;
  academicSystem: string;
  postGradOptions: string;
  featuredCities: string[];
}

const countries: Country[] = [
  {
    id: "uk",
    name: "United Kingdom",
    region: "europe",
    flagEmoji: "🇬🇧",
    topUniversities: [
      "University of Oxford",
      "University of Cambridge",
      "Imperial College London",
      "University College London",
      "London School of Economics"
    ],
    visaInfo: "Student visa (Tier 4) required. Apply up to 3 months before course start date. Proof of funds and university offer letter needed.",
    scholarships: [
      "Chevening Scholarships",
      "Commonwealth Scholarships",
      "GREAT Scholarships",
      "University-specific scholarships"
    ],
    costOfLiving: "£12,000-15,000/year (excluding London), £15,000-18,000/year (London)",
    languageRequirements: "IELTS: 6.0-7.0 for undergraduate, 6.5-7.5 for postgraduate",
    academicSystem: "3-year bachelor's degrees, 1-year master's degrees, research-focused PhD programs",
    postGradOptions: "Graduate Route visa allows 2-year post-study work permission",
    featuredCities: ["London", "Edinburgh", "Manchester", "Oxford", "Cambridge"]
  },
  {
    id: "us",
    name: "United States",
    region: "north-america",
    flagEmoji: "🇺🇸",
    topUniversities: [
      "Harvard University",
      "Stanford University",
      "Massachusetts Institute of Technology",
      "California Institute of Technology",
      "Princeton University"
    ],
    visaInfo: "F-1 student visa required. I-20 form from university needed to apply. SEVIS fee and visa interview required.",
    scholarships: [
      "Fulbright Foreign Student Program",
      "Hubert H. Humphrey Fellowship",
      "University merit scholarships",
      "Sports scholarships"
    ],
    costOfLiving: "$10,000-18,000/year (varies greatly by location)",
    languageRequirements: "TOEFL: 80-100 iBT or IELTS: 6.5-7.5",
    academicSystem: "4-year bachelor's degrees, 1-2 year master's degrees, flexible credit system",
    postGradOptions: "Optional Practical Training (OPT) allows 12 months of work; STEM fields get 24-month extension",
    featuredCities: ["New York", "Boston", "Chicago", "San Francisco", "Los Angeles"]
  },
  {
    id: "australia",
    name: "Australia",
    region: "asia-pacific",
    flagEmoji: "🇦🇺",
    topUniversities: [
      "University of Melbourne",
      "Australian National University",
      "University of Sydney",
      "University of Queensland",
      "Monash University"
    ],
    visaInfo: "Subclass 500 Student visa required. Confirmation of Enrollment (CoE) needed to apply. Health insurance mandatory.",
    scholarships: [
      "Australia Awards",
      "Destination Australia",
      "Research Training Program",
      "University Global Scholarships"
    ],
    costOfLiving: "AUD 20,000-25,000/year",
    languageRequirements: "IELTS: 6.0-6.5 for undergraduate, 6.5-7.0 for postgraduate",
    academicSystem: "3-year bachelor's degrees, coursework or research master's degrees, practical training emphasis",
    postGradOptions: "Temporary Graduate visa (subclass 485) allows 2-4 years of post-study work",
    featuredCities: ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide"]
  },
  {
    id: "canada",
    name: "Canada",
    region: "north-america",
    flagEmoji: "🇨🇦",
    topUniversities: [
      "University of Toronto",
      "University of British Columbia",
      "McGill University",
      "University of Montreal",
      "University of Alberta"
    ],
    visaInfo: "Study permit required. Letter of acceptance from a DLI (Designated Learning Institution) needed to apply.",
    scholarships: [
      "Vanier Canada Graduate Scholarships",
      "Trudeau Foundation Scholarships",
      "Provincial scholarships",
      "University entrance scholarships"
    ],
    costOfLiving: "CAD 15,000-20,000/year",
    languageRequirements: "IELTS: 6.0-6.5, TOEFL: 80-90 iBT, or proof of French proficiency for French programs",
    academicSystem: "4-year bachelor's degrees, research-intensive graduate programs, co-op education options",
    postGradOptions: "Post-Graduation Work Permit (PGWP) allows work for up to 3 years; pathway to permanent residency",
    featuredCities: ["Toronto", "Vancouver", "Montreal", "Ottawa", "Quebec City"]
  },
  {
    id: "germany",
    name: "Germany",
    region: "europe",
    flagEmoji: "🇩🇪",
    topUniversities: [
      "Technical University of Munich",
      "Ludwig Maximilian University of Munich",
      "Heidelberg University",
      "Humboldt University of Berlin",
      "RWTH Aachen University"
    ],
    visaInfo: "National visa for study required (except EU citizens). University admission and proof of funds needed to apply.",
    scholarships: [
      "DAAD Scholarships",
      "Erasmus+ Programme",
      "Deutschland Stipendium",
      "State-specific scholarships"
    ],
    costOfLiving: "€850-1,000/month",
    languageRequirements: "German proficiency (TestDaF/DSH) for German-taught programs; IELTS/TOEFL for English programs",
    academicSystem: "Free or low tuition at public universities, research-oriented education, strong industry connections",
    postGradOptions: "18-month residence permit to seek employment after graduation",
    featuredCities: ["Berlin", "Munich", "Hamburg", "Cologne", "Frankfurt"]
  },
  {
    id: "japan",
    name: "Japan",
    region: "asia-pacific",
    flagEmoji: "🇯🇵",
    topUniversities: [
      "University of Tokyo",
      "Kyoto University",
      "Osaka University",
      "Tohoku University",
      "Tokyo Institute of Technology"
    ],
    visaInfo: "Student visa required. Certificate of Eligibility from educational institution needed to apply.",
    scholarships: [
      "MEXT Scholarship",
      "JASSO Student Exchange Support Program",
      "University-specific scholarships",
      "Local government scholarships"
    ],
    costOfLiving: "¥100,000-150,000/month",
    languageRequirements: "JLPT N2/N1 for Japanese programs; IELTS 6.0-6.5 for English programs",
    academicSystem: "Emphasis on research, strong industry connections, growing number of English-taught programs",
    postGradOptions: "Designated Activities visa for job-hunting after graduation (up to 1 year)",
    featuredCities: ["Tokyo", "Kyoto", "Osaka", "Fukuoka", "Sapporo"]
  },
  {
    id: "france",
    name: "France",
    region: "europe",
    flagEmoji: "🇫🇷",
    topUniversities: [
      "Sorbonne University",
      "Paris Sciences et Lettres",
      "École Polytechnique",
      "HEC Paris",
      "Sciences Po"
    ],
    visaInfo: "Long-stay student visa required (except EU citizens). VLS-TS visa needs to be validated upon arrival.",
    scholarships: [
      "Eiffel Excellence Scholarship",
      "French Government Scholarships",
      "Erasmus+ Programme",
      "Regional council scholarships"
    ],
    costOfLiving: "€800-1,200/month",
    languageRequirements: "B2 level French for French-taught programs; IELTS/TOEFL for English programs",
    academicSystem: "Low tuition fees at public institutions, grandes écoles for elite education, research excellence",
    postGradOptions: "Graduate can stay for up to 1 year to find employment (APS visa)",
    featuredCities: ["Paris", "Lyon", "Marseille", "Toulouse", "Bordeaux"]
  },
  {
    id: "netherlands",
    name: "Netherlands",
    region: "europe",
    flagEmoji: "🇳🇱",
    topUniversities: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Utrecht University",
      "Leiden University",
      "Erasmus University Rotterdam"
    ],
    visaInfo: "Residence permit required (except EU citizens). University handles application process after admission.",
    scholarships: [
      "Orange Knowledge Programme",
      "Holland Scholarship",
      "University-specific scholarships",
      "StuNed Scholarship"
    ],
    costOfLiving: "€800-1,100/month",
    languageRequirements: "IELTS: 6.0-7.0 (extensive English-taught programs available)",
    academicSystem: "Problem-based learning, extensive English-taught programs, strong international orientation",
    postGradOptions: "Orientation Year permit allows 1 year to find work after graduation",
    featuredCities: ["Amsterdam", "Rotterdam", "Utrecht", "The Hague", "Eindhoven"]
  },
  {
    id: "singapore",
    name: "Singapore",
    region: "asia-pacific",
    flagEmoji: "🇸🇬",
    topUniversities: [
      "National University of Singapore",
      "Nanyang Technological University",
      "Singapore Management University",
      "Singapore University of Technology and Design",
      "Yale-NUS College"
    ],
    visaInfo: "Student's Pass required, applied through the Student's Pass Online Application & Registration (SOLAR)",
    scholarships: [
      "Ministry of Education Scholarships",
      "ASEAN Scholarships",
      "Singapore International Graduate Award",
      "University-specific scholarships"
    ],
    costOfLiving: "SGD 1,500-2,500/month",
    languageRequirements: "IELTS: 6.5-7.0, TOEFL: 85-100 iBT (English is the main language of instruction)",
    academicSystem: "World-class education, rigorous academics, strong industry partnerships, global outlook",
    postGradOptions: "Eligible to apply for work visas upon securing employment offers",
    featuredCities: ["Singapore"]
  }
];

export default function InteractiveMap() {
  const [selectedRegion, setSelectedRegion] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [activeTab, setActiveTab] = useState<string>("universities");

  const regions = [
    { id: "europe", name: "Europe" },
    { id: "north-america", name: "North America" },
    { id: "asia-pacific", name: "Asia-Pacific" },
    { id: "middle-east", name: "Middle East" },
    { id: "africa", name: "Africa" },
    { id: "latin-america", name: "Latin America" }
  ];

  const filteredCountries = selectedRegion === "all" 
    ? countries 
    : countries.filter(country => country.region === selectedRegion);

  const selectCountry = (country: Country) => {
    setSelectedCountry(country);
    setActiveTab("universities");
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Explore Study Destinations
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover information about top study abroad destinations, including universities, visa requirements, and scholarship opportunities.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-8">
          <button
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedRegion === "all" 
                ? "bg-panda-purple text-white" 
                : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
            }`}
            onClick={() => setSelectedRegion("all")}
          >
            All Regions
          </button>
          {regions.map(region => (
            <button
              key={region.id}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedRegion === region.id
                  ? "bg-panda-purple text-white" 
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => setSelectedRegion(region.id)}
            >
              {region.name}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 lg:col-span-3">
            <Card className="h-full">
              <CardHeader>
                <CardTitle>Countries</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                  {filteredCountries.map(country => (
                    <li key={country.id}>
                      <button
                        className={`w-full text-left px-4 py-3 flex items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors ${
                          selectedCountry?.id === country.id 
                            ? "bg-gray-100 dark:bg-gray-800" 
                            : ""
                        }`}
                        onClick={() => selectCountry(country)}
                      >
                        <span className="text-2xl mr-3">{country.flagEmoji}</span>
                        <span className="font-medium text-gray-800 dark:text-white">
                          {country.name}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>

                {filteredCountries.length === 0 && (
                  <div className="px-4 py-8 text-center">
                    <Globe className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                    <p className="text-gray-600 dark:text-gray-400">
                      No countries available in this region yet.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-8 lg:col-span-9">
            {selectedCountry ? (
              <Card>
                <CardHeader className="border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center">
                    <span className="text-4xl mr-3">{selectedCountry.flagEmoji}</span>
                    <CardTitle className="text-2xl">
                      Studying in {selectedCountry.name}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="p-6">
                    <TabsList className="grid grid-cols-4 mb-6">
                      <TabsTrigger value="universities" className="text-xs sm:text-sm">
                        <GraduationCap className="h-4 w-4 mr-1 hidden sm:inline" />
                        Universities
                      </TabsTrigger>
                      <TabsTrigger value="requirements" className="text-xs sm:text-sm">
                        <FileText className="h-4 w-4 mr-1 hidden sm:inline" />
                        Requirements
                      </TabsTrigger>
                      <TabsTrigger value="costs" className="text-xs sm:text-sm">
                        <DollarSign className="h-4 w-4 mr-1 hidden sm:inline" />
                        Costs
                      </TabsTrigger>
                      <TabsTrigger value="living" className="text-xs sm:text-sm">
                        <Home className="h-4 w-4 mr-1 hidden sm:inline" />
                        Living
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="universities" className="mt-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <GraduationCap className="h-5 w-5 mr-2 text-panda-purple" />
                            Top Universities
                          </h3>
                          <ul className="space-y-2">
                            {selectedCountry.topUniversities.map((uni, index) => (
                              <li key={index} className="flex items-center">
                                <span className="w-6 h-6 rounded-full bg-panda-purple/10 text-panda-purple flex items-center justify-center text-sm mr-3">
                                  {index + 1}
                                </span>
                                <span className="text-gray-700 dark:text-gray-300">{uni}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <Building className="h-5 w-5 mr-2 text-panda-pink" />
                            Academic System
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedCountry.academicSystem}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <Clock className="h-5 w-5 mr-2 text-panda-yellow" />
                            Post-Graduation Options
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedCountry.postGradOptions}
                          </p>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="requirements" className="mt-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <FileText className="h-5 w-5 mr-2 text-panda-purple" />
                            Visa Requirements
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedCountry.visaInfo}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <Languages className="h-5 w-5 mr-2 text-panda-pink" />
                            Language Requirements
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedCountry.languageRequirements}
                          </p>
                        </div>

                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <DollarSign className="h-5 w-5 mr-2 text-panda-yellow" />
                            Scholarships
                          </h3>
                          <ul className="space-y-2">
                            {selectedCountry.scholarships.map((scholarship, index) => (
                              <li key={index} className="flex items-start">
                                <span className="text-panda-lav mr-2">•</span>
                                <span className="text-gray-700 dark:text-gray-300">{scholarship}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="costs" className="mt-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <DollarSign className="h-5 w-5 mr-2 text-panda-purple" />
                            Cost of Living
                          </h3>
                          <p className="text-gray-700 dark:text-gray-300">
                            {selectedCountry.costOfLiving}
                          </p>

                          <div className="grid grid-cols-4 gap-2 mt-6">
                            <div className="bg-panda-pink/10 rounded-lg p-4 text-center">
                              <h4 className="text-sm font-medium text-panda-pink mb-2">Housing</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">40%</p>
                            </div>
                            <div className="bg-panda-purple/10 rounded-lg p-4 text-center">
                              <h4 className="text-sm font-medium text-panda-purple mb-2">Food</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">25%</p>
                            </div>
                            <div className="bg-panda-yellow/10 rounded-lg p-4 text-center">
                              <h4 className="text-sm font-medium text-panda-yellow mb-2">Transport</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">15%</p>
                            </div>
                            <div className="bg-panda-lav/10 rounded-lg p-4 text-center">
                              <h4 className="text-sm font-medium text-panda-lav mb-2">Other</h4>
                              <p className="text-sm text-gray-700 dark:text-gray-300">20%</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                            Money-Saving Tips
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-panda-purple mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Look for student housing outside city centers</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-purple mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Use student discounts for transportation and entertainment</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-purple mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Cook at home instead of eating out frequently</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-purple mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Check if part-time work is allowed on your student visa</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </TabsContent>

                    <TabsContent value="living" className="mt-0">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                            <Home className="h-5 w-5 mr-2 text-panda-purple" />
                            Featured Cities
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
                            {selectedCountry.featuredCities.map((city, index) => (
                              <div 
                                key={index} 
                                className="p-3 bg-gray-100 dark:bg-gray-800 rounded-md text-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                              >
                                <span className="text-gray-800 dark:text-white font-medium">
                                  {city}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                            Cultural Tips
                          </h3>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-panda-pink mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Research local customs and etiquette before arrival</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-pink mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Join international student groups to make connections</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-pink mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Explore beyond university campuses to experience local culture</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-panda-pink mr-2">•</span>
                              <span className="text-gray-700 dark:text-gray-300">Learn basic phrases in the local language, even for English-speaking countries</span>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-3">
                            Weather & Climate
                          </h3>
                          <div className="grid grid-cols-4 gap-2">
                            {["Winter", "Spring", "Summer", "Fall"].map((season) => (
                              <div key={season} className="text-center">
                                <div className="h-12 w-12 mx-auto mb-2 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-full">
                                  {season === "Winter" && <span>❄️</span>}
                                  {season === "Spring" && <span>🌱</span>}
                                  {season === "Summer" && <span>☀️</span>}
                                  {season === "Fall" && <span>🍂</span>}
                                </div>
                                <p className="text-sm text-gray-700 dark:text-gray-300">{season}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-12">
                <div className="text-center max-w-lg">
                  <Globe className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Select a country to explore
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Choose a country from the list to view detailed information about studying there, including top universities, visa requirements, and cost of living.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}