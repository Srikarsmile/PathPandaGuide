import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { FileText, Save, CheckCircle, Share2 } from "lucide-react";

interface CountryRequirements {
  country: string;
  visaDocuments: string[];
  recommendedPreparationTime: string;
  additionalNotes: string;
}

interface ProgramRequirements {
  program: string;
  documents: string[];
}

// Sample data for the checklist generator
const countryRequirements: CountryRequirements[] = [
  {
    country: "United States",
    visaDocuments: [
      "Valid passport (valid for at least 6 months beyond your stay)",
      "Completed DS-160 form",
      "SEVIS fee payment receipt",
      "I-20 or DS-2019 form from your university",
      "Proof of financial support",
      "Passport-sized photographs",
      "Academic transcripts and certificates",
      "Standardized test scores (TOEFL/IELTS)"
    ],
    recommendedPreparationTime: "3-5 months",
    additionalNotes: "Schedule a visa interview at the U.S. Embassy or Consulate in your home country. Wait times can be long during peak seasons."
  },
  {
    country: "United Kingdom",
    visaDocuments: [
      "Valid passport",
      "Completed online application form",
      "CAS (Confirmation of Acceptance for Studies) from your university",
      "Proof of financial means",
      "Tuberculosis test results (if applicable)",
      "Academic qualifications",
      "Proof of English language proficiency",
      "Passport-sized photographs"
    ],
    recommendedPreparationTime: "2-3 months",
    additionalNotes: "Apply for your Student visa up to 3 months before your course starts. You'll need to prove you have enough money to support yourself during your studies."
  },
  {
    country: "Canada",
    visaDocuments: [
      "Valid passport",
      "Letter of acceptance from a designated learning institution",
      "Proof of financial support",
      "Completed application forms",
      "Immigration medical examination results (if required)",
      "Passport-sized photographs",
      "Biometrics (fingerprints and photo)",
      "Study permit processing fee receipt"
    ],
    recommendedPreparationTime: "3-4 months",
    additionalNotes: "You may need to provide biometrics with your application. Processing times vary by country."
  },
  {
    country: "Australia",
    visaDocuments: [
      "Valid passport",
      "Confirmation of Enrollment (CoE)",
      "Genuine Temporary Entrant (GTE) statement",
      "Proof of financial capacity",
      "Overseas Student Health Cover (OSHC)",
      "English proficiency test results",
      "Academic transcripts and certificates",
      "Visa application fee receipt"
    ],
    recommendedPreparationTime: "2-3 months",
    additionalNotes: "The most common student visa is the Subclass 500. You must show you have enough money to pay for your tuition, living expenses, and return transportation."
  },
  {
    country: "Germany",
    visaDocuments: [
      "Valid passport",
      "University admission letter",
      "Proof of financial resources (blocked account or scholarship)",
      "Health insurance proof",
      "Proof of German language skills or English for English-taught programs",
      "Academic certificates and transcripts",
      "Passport-sized photographs",
      "Visa application fee receipt"
    ],
    recommendedPreparationTime: "2-3 months",
    additionalNotes: "You'll need to open a blocked account (Sperrkonto) with approximately €10,332 for a year of study to prove financial capacity."
  }
];

const programRequirements: ProgramRequirements[] = [
  {
    program: "Undergraduate",
    documents: [
      "High school diploma/certificate",
      "High school transcripts",
      "Standardized test scores (SAT/ACT if applicable)",
      "English language proficiency test (TOEFL/IELTS)",
      "Statement of purpose/Personal essay",
      "Letters of recommendation",
      "Resume/CV (for some programs)",
      "Portfolio (for art/design programs)"
    ]
  },
  {
    program: "Graduate",
    documents: [
      "Bachelor's degree certificate",
      "University transcripts",
      "GRE/GMAT scores (if required)",
      "English language proficiency test (TOEFL/IELTS)",
      "Statement of purpose/Research proposal",
      "Letters of recommendation",
      "Resume/CV",
      "Portfolio (for specific programs)"
    ]
  },
  {
    program: "PhD",
    documents: [
      "Master's degree certificate",
      "University transcripts (Bachelor's and Master's)",
      "Research proposal",
      "English language proficiency test (TOEFL/IELTS)",
      "Statement of purpose",
      "Letters of recommendation",
      "Resume/CV",
      "Samples of academic writing"
    ]
  },
  {
    program: "MBA",
    documents: [
      "Bachelor's degree certificate",
      "University transcripts",
      "GMAT/GRE scores",
      "English language proficiency test (TOEFL/IELTS)",
      "Professional experience documentation",
      "Statement of purpose",
      "Letters of recommendation",
      "Resume/CV"
    ]
  }
];

// Common requirements for all applications
const commonRequirements = [
  "Application form",
  "Application fee payment",
  "Valid passport",
  "Passport-sized photographs",
  "Health insurance documentation"
];

export default function ApplicationChecklist() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [selectedProgram, setSelectedProgram] = useState<string>("");
  const [university, setUniversity] = useState<string>("");
  const [checklist, setChecklist] = useState<string[]>([]);
  const [checklistGenerated, setChecklistGenerated] = useState<boolean>(false);
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const generateChecklist = () => {
    if (!selectedCountry || !selectedProgram) return;

    const countryData = countryRequirements.find(c => c.country === selectedCountry);
    const programData = programRequirements.find(p => p.program === selectedProgram);

    if (!countryData || !programData) return;

    const generatedChecklist = [
      ...commonRequirements,
      ...programData.documents,
      ...countryData.visaDocuments
    ];

    // Initialize all checklist items as unchecked
    const initialCheckedState: Record<string, boolean> = {};
    generatedChecklist.forEach(item => {
      initialCheckedState[item] = false;
    });

    setChecklist(generatedChecklist);
    setCheckedItems(initialCheckedState);
    setChecklistGenerated(true);
  };

  const toggleItem = (item: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [item]: !prev[item]
    }));
  };

  const getCompletionPercentage = (): number => {
    if (checklist.length === 0) return 0;
    
    const totalChecked = Object.values(checkedItems).filter(Boolean).length;
    return Math.round((totalChecked / checklist.length) * 100);
  };

  const resetChecklist = () => {
    setChecklist([]);
    setCheckedItems({});
    setChecklistGenerated(false);
    setSelectedCountry("");
    setSelectedProgram("");
    setUniversity("");
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Application Checklist Generator
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-3">
            Get a basic overview of documents needed for your study abroad application. For a comprehensive, personalized checklist and expert guidance, book a free consultation with our advisors.
          </p>
          <div className="flex justify-center">
            <Button 
              variant="default" 
              className="bg-panda-purple hover:bg-panda-purple/90 mb-4"
              onClick={() => window.location.href = '/consult'}
            >
              Book Free Consultation
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 max-w-5xl mx-auto">
          <div className="md:col-span-5">
            <Card>
              <CardHeader>
                <CardTitle>Create Your Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="country" className="block mb-2">
                    Destination Country
                  </Label>
                  <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                    <SelectTrigger id="country">
                      <SelectValue placeholder="Select a country" />
                    </SelectTrigger>
                    <SelectContent>
                      {countryRequirements.map(c => (
                        <SelectItem key={c.country} value={c.country}>
                          {c.country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="program" className="block mb-2">
                    Program Level
                  </Label>
                  <Select value={selectedProgram} onValueChange={setSelectedProgram}>
                    <SelectTrigger id="program">
                      <SelectValue placeholder="Select program level" />
                    </SelectTrigger>
                    <SelectContent>
                      {programRequirements.map(p => (
                        <SelectItem key={p.program} value={p.program}>
                          {p.program}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="university" className="block mb-2">
                    University (Optional)
                  </Label>
                  <Input 
                    id="university" 
                    placeholder="Enter university name" 
                    value={university}
                    onChange={(e) => setUniversity(e.target.value)}
                  />
                </div>

                <Button 
                  onClick={generateChecklist}
                  className="w-full bg-panda-purple hover:bg-opacity-90 mt-4"
                  disabled={!selectedCountry || !selectedProgram}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Generate Checklist
                </Button>
              </CardContent>
            </Card>

            {checklistGenerated && selectedCountry && (
              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Country Notes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-panda-lav">Recommended Preparation Time:</h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {countryRequirements.find(c => c.country === selectedCountry)?.recommendedPreparationTime}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-panda-lav">Additional Notes:</h4>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        {countryRequirements.find(c => c.country === selectedCountry)?.additionalNotes}
                      </p>
                    </div>
                    <div className="pt-2 mt-2 border-t border-gray-100 dark:border-gray-700">
                      <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                        <strong>Note:</strong> Requirements can vary significantly between institutions and change frequently. Our advisors can provide the most current, detailed information for your specific situation.
                      </p>
                      <Button 
                        variant="link" 
                        className="p-0 h-auto text-panda-purple dark:text-panda-lav mt-1"
                        onClick={() => window.location.href = '/consult'}
                      >
                        Schedule a free consultation →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="md:col-span-7">
            {checklistGenerated ? (
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>
                      Your Application Checklist
                      {university && <span className="ml-1">for {university}</span>}
                    </CardTitle>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {selectedProgram} program in {selectedCountry}
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 font-medium">
                    <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center">
                      <span className="text-sm">{getCompletionPercentage()}%</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {checklist.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3 py-1">
                        <Checkbox 
                          id={`item-${index}`}
                          checked={checkedItems[item] || false}
                          onCheckedChange={() => toggleItem(item)}
                          className="mt-1"
                        />
                        <Label 
                          htmlFor={`item-${index}`} 
                          className={`${checkedItems[item] ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-700 dark:text-gray-300'}`}
                        >
                          {item}
                        </Label>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="bg-panda-lav/10 p-4 rounded-lg mb-4">
                      <h4 className="font-medium text-panda-purple mb-2">Need Expert Guidance?</h4>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                        This is just a basic overview. Our experts can provide:
                      </p>
                      <ul className="text-sm list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 mb-3">
                        <li>Institution-specific requirements</li>
                        <li>Personalized timeline and tracking</li>
                        <li>Document preparation support</li>
                        <li>Application review services</li>
                      </ul>
                      <Button
                        className="w-full bg-panda-purple hover:bg-panda-purple/90 mt-2"
                        onClick={() => window.location.href = '/consult'}
                      >
                        Get Personal Support
                      </Button>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm" onClick={resetChecklist}>
                        <FileText className="mr-1 h-4 w-4" />
                        Create New
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => window.location.href = '/tools'}>
                        <Save className="mr-1 h-4 w-4" />
                        Explore More Tools
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="h-full flex items-center justify-center bg-gray-50 dark:bg-gray-800 rounded-lg p-12">
                <div className="text-center">
                  <CheckCircle className="h-12 w-12 mx-auto text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">Generate Your Basic Checklist</h3>
                  <p className="text-gray-600 dark:text-gray-400 max-w-md mb-4">
                    Select your destination country and program level on the left to generate a basic document checklist. This tool provides general guidance, but for a comprehensive, institution-specific checklist, we recommend consulting with our experts.
                  </p>
                  <Button
                    className="bg-panda-purple hover:bg-panda-purple/90"
                    onClick={() => window.location.href = '/consult'}
                  >
                    Get Expert Advice
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}