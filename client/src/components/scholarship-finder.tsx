import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Scholarship {
  id: number;
  name: string;
  organization: string;
  amount: string;
  deadline: string;
  eligibility: string[];
  countries: string[];
  fields: string[];
  link: string;
}

const scholarships: Scholarship[] = [
  {
    id: 1,
    name: "Fulbright Foreign Student Program",
    organization: "U.S. Department of State",
    amount: "Full funding",
    deadline: "Varies by country",
    eligibility: ["Bachelor's degree", "English proficiency", "Country-specific requirements"],
    countries: ["United States"],
    fields: ["All fields"],
    link: "https://foreign.fulbrightonline.org/"
  },
  {
    id: 2,
    name: "Chevening Scholarships",
    organization: "UK Government",
    amount: "Full funding",
    deadline: "November 2024",
    eligibility: ["Bachelor's degree", "Work experience", "English proficiency"],
    countries: ["United Kingdom"],
    fields: ["All fields"],
    link: "https://www.chevening.org/"
  },
  {
    id: 3,
    name: "Australia Awards",
    organization: "Australian Government",
    amount: "Full funding",
    deadline: "April 2024",
    eligibility: ["Bachelor's degree", "Work experience", "English proficiency"],
    countries: ["Australia"],
    fields: ["Development-related fields"],
    link: "https://www.dfat.gov.au/people-to-people/australia-awards/Pages/australia-awards-scholarships"
  },
  {
    id: 4,
    name: "DAAD Scholarships",
    organization: "German Academic Exchange Service",
    amount: "€850-1,200 monthly",
    deadline: "Varies by program",
    eligibility: ["Bachelor's degree", "German/English proficiency"],
    countries: ["Germany"],
    fields: ["All fields"],
    link: "https://www.daad.de/en/"
  },
  {
    id: 5,
    name: "Erasmus Mundus Joint Master Degrees",
    organization: "European Commission",
    amount: "€1,400 monthly + tuition",
    deadline: "Varies by program",
    eligibility: ["Bachelor's degree", "Varies by program"],
    countries: ["European Union"],
    fields: ["Various programs"],
    link: "https://erasmus-plus.ec.europa.eu/opportunities/individuals/students/erasmus-mundus-joint-masters-scholarships"
  },
  {
    id: 6,
    name: "Commonwealth Scholarships",
    organization: "Commonwealth Scholarship Commission",
    amount: "Full funding",
    deadline: "October 2024",
    eligibility: ["Citizens of Commonwealth countries", "Bachelor's degree"],
    countries: ["United Kingdom"],
    fields: ["Development-related fields"],
    link: "https://cscuk.fcdo.gov.uk/scholarships/"
  },
  {
    id: 7,
    name: "Vanier Canada Graduate Scholarships",
    organization: "Government of Canada",
    amount: "$50,000 per year for three years",
    deadline: "November 2024",
    eligibility: ["PhD applicants", "Academic excellence", "Leadership skills"],
    countries: ["Canada"],
    fields: ["All fields"],
    link: "https://vanier.gc.ca/"
  },
  {
    id: 8,
    name: "Orange Knowledge Programme",
    organization: "Netherlands Government",
    amount: "Full funding",
    deadline: "Varies by country",
    eligibility: ["Bachelor's degree", "Work experience", "Age requirements"],
    countries: ["Netherlands"],
    fields: ["Development-related fields"],
    link: "https://www.nuffic.nl/en/subjects/orange-knowledge-programme/"
  }
];

export default function ScholarshipFinder() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedField, setSelectedField] = useState<string>("all");
  const [selectedCountry, setSelectedCountry] = useState<string>("all");
  const [filteredScholarships, setFilteredScholarships] = useState<Scholarship[]>(scholarships);

  const uniqueFields = Array.from(
    new Set(scholarships.flatMap(scholarship => scholarship.fields))
  ).sort();

  const uniqueCountries = Array.from(
    new Set(scholarships.flatMap(scholarship => scholarship.countries))
  ).sort();

  const handleSearch = () => {
    const results = scholarships.filter(scholarship => {
      const matchesSearch = searchTerm === "" || 
        scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
        scholarship.organization.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesField = selectedField === "all" || 
        scholarship.fields.includes(selectedField) ||
        (selectedField === "All fields" && scholarship.fields.includes("All fields"));
      
      const matchesCountry = selectedCountry === "all" || 
        scholarship.countries.includes(selectedCountry);
      
      return matchesSearch && matchesField && matchesCountry;
    });

    setFilteredScholarships(results);
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Scholarship Finder</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover international scholarship opportunities tailored to your academic interests and desired study destinations.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-xl shadow-md p-6 mb-10">
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Search by name or organization
              </label>
              <Input
                type="text"
                placeholder="e.g., Fulbright or DAAD"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Field of Study
              </label>
              <Select value={selectedField} onValueChange={setSelectedField}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a field" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Fields</SelectItem>
                  {uniqueFields.map(field => (
                    <SelectItem key={field} value={field}>{field}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Country of Study
              </label>
              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Countries</SelectItem>
                  {uniqueCountries.map(country => (
                    <SelectItem key={country} value={country}>{country}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            onClick={handleSearch}
            className="w-full md:w-auto bg-panda-purple hover:bg-opacity-90 text-white"
          >
            <Search className="mr-2 h-4 w-4" />
            Search Scholarships
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {filteredScholarships.length > 0 ? (
            filteredScholarships.map(scholarship => (
              <Card key={scholarship.id} className="overflow-hidden">
                <CardHeader className="bg-gray-50 dark:bg-gray-800 pb-3">
                  <CardTitle className="text-xl text-panda-purple dark:text-panda-lav">
                    {scholarship.name}
                  </CardTitle>
                  <CardDescription className="flex justify-between">
                    <span>{scholarship.organization}</span>
                    <span className="font-semibold text-panda-purple dark:text-panda-lav">{scholarship.amount}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="mb-3">
                    <span className="text-gray-600 dark:text-gray-400 text-sm">Deadline: </span>
                    <span className="font-medium text-red-500">{scholarship.deadline}</span>
                  </div>

                  <div className="mb-3">
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Eligible Countries:</div>
                    <div className="flex flex-wrap gap-1">
                      {scholarship.countries.map((country, index) => (
                        <Badge key={index} variant="outline" className="bg-panda-lav/10 text-panda-purple">
                          {country}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Fields of Study:</div>
                    <div className="flex flex-wrap gap-1">
                      {scholarship.fields.map((field, index) => (
                        <Badge key={index} variant="outline" className="bg-panda-pink/10 text-panda-pink">
                          {field}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="mb-3">
                    <div className="text-gray-600 dark:text-gray-400 text-sm mb-1">Eligibility:</div>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 list-disc pl-5">
                      {scholarship.eligibility.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-4">
                    <a
                      href={scholarship.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 bg-panda-purple hover:bg-opacity-90 text-white text-sm rounded-md transition-colors"
                    >
                      Apply Now
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-2 py-12 text-center">
              <div className="text-panda-purple dark:text-panda-lav text-5xl mb-4">😢</div>
              <h3 className="text-xl font-semibold mb-2">No scholarships found</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search criteria to find more results.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}