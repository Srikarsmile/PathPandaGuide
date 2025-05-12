import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Building, DollarSign, Globe, Activity } from "lucide-react";

interface University {
  name: string;
  country: string;
  tuition: string;
  ranking: number;
  acceptanceRate: string;
  studentsCount: string;
  strengths: string[];
  imageUrl: string;
}

const universities: University[] = [
  {
    name: "University of Oxford",
    country: "United Kingdom",
    tuition: "$45,000/year",
    ranking: 1,
    acceptanceRate: "17%",
    studentsCount: "24,000",
    strengths: ["Research", "Humanities", "Sciences", "Global Network"],
    imageUrl: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    name: "Harvard University",
    country: "United States",
    tuition: "$55,000/year",
    ranking: 3,
    acceptanceRate: "5%",
    studentsCount: "23,000",
    strengths: ["Business", "Law", "Medicine", "Research"],
    imageUrl: "https://images.unsplash.com/photo-1576517296811-ff1362fdfde2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    name: "University of Toronto",
    country: "Canada",
    tuition: "$30,000/year",
    ranking: 18,
    acceptanceRate: "43%",
    studentsCount: "93,000",
    strengths: ["Research", "Medicine", "Engineering", "Innovation"],
    imageUrl: "https://images.unsplash.com/photo-1598726668148-99946ef1cb42?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    tuition: "$1,600/year",
    ranking: 9,
    acceptanceRate: "27%",
    studentsCount: "22,200",
    strengths: ["Engineering", "Computer Science", "Natural Sciences", "Architecture"],
    imageUrl: "https://images.unsplash.com/photo-1527066579998-dbbae57f45ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    name: "National University of Singapore",
    country: "Singapore",
    tuition: "$18,000/year",
    ranking: 11,
    acceptanceRate: "5%",
    studentsCount: "38,000",
    strengths: ["Business", "Engineering", "Computer Science", "Medicine"],
    imageUrl: "https://images.unsplash.com/photo-1565060169187-3274f1a8da46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  },
  {
    name: "University of Melbourne",
    country: "Australia",
    tuition: "$33,000/year",
    ranking: 33,
    acceptanceRate: "70%",
    studentsCount: "52,000",
    strengths: ["Research", "Arts", "Biomedical Sciences", "Engineering"],
    imageUrl: "https://images.unsplash.com/photo-1614531341773-3bff8b7cb3fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500"
  }
];

export default function UniversityComparison() {
  const [university1, setUniversity1] = useState<University | null>(null);
  const [university2, setUniversity2] = useState<University | null>(null);

  const handleUniversity1Change = (value: string) => {
    const selected = universities.find(uni => uni.name === value) || null;
    setUniversity1(selected);
  };

  const handleUniversity2Change = (value: string) => {
    const selected = universities.find(uni => uni.name === value) || null;
    setUniversity2(selected);
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">University Comparison Tool</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Compare universities side by side to help decide which institution is the right fit for your academic journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Select First University</label>
            <Select onValueChange={handleUniversity1Change}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a university" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni.name} value={uni.name}>
                    {uni.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Select Second University</label>
            <Select onValueChange={handleUniversity2Change}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Choose a university" />
              </SelectTrigger>
              <SelectContent>
                {universities.map((uni) => (
                  <SelectItem key={uni.name} value={uni.name}>
                    {uni.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {university1 && university2 && (
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="academics">Academics</TabsTrigger>
              <TabsTrigger value="costs">Costs</TabsTrigger>
              <TabsTrigger value="location">Location</TabsTrigger>
              <TabsTrigger value="life">Student Life</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{university1.name}</CardTitle>
                    <CardDescription>{university1.country}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={university1.imageUrl} 
                      alt={university1.name} 
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Ranking:</span>
                        <span className="font-medium">{university1.ranking} Worldwide</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Acceptance Rate:</span>
                        <span className="font-medium">{university1.acceptanceRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Student Population:</span>
                        <span className="font-medium">{university1.studentsCount}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-gray-600 dark:text-gray-400 block mb-2">Key Strengths:</span>
                        <div className="flex flex-wrap gap-2">
                          {university1.strengths.map((strength, index) => (
                            <span 
                              key={index} 
                              className="bg-panda-lav-20 text-panda-purple px-3 py-1 rounded-full text-sm"
                            >
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>{university2.name}</CardTitle>
                    <CardDescription>{university2.country}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <img 
                      src={university2.imageUrl} 
                      alt={university2.name} 
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Ranking:</span>
                        <span className="font-medium">{university2.ranking} Worldwide</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Acceptance Rate:</span>
                        <span className="font-medium">{university2.acceptanceRate}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Student Population:</span>
                        <span className="font-medium">{university2.studentsCount}</span>
                      </div>
                      <div className="pt-2">
                        <span className="text-gray-600 dark:text-gray-400 block mb-2">Key Strengths:</span>
                        <div className="flex flex-wrap gap-2">
                          {university2.strengths.map((strength, index) => (
                            <span 
                              key={index} 
                              className="bg-panda-pink-20 text-panda-pink px-3 py-1 rounded-full text-sm"
                            >
                              {strength}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="academics">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 text-panda-purple mr-2" />
                      <CardTitle className="text-xl">{university1.name} Academics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Known for excellence in {university1.strengths.join(", ")}.</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Faculty-Student Ratio:</span>
                        <span className="font-medium">1:6</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Research Output:</span>
                        <span className="font-medium">Very High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Library Resources:</span>
                        <span className="font-medium">Exceptional</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-5 w-5 text-panda-pink mr-2" />
                      <CardTitle className="text-xl">{university2.name} Academics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">Known for excellence in {university2.strengths.join(", ")}.</p>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Faculty-Student Ratio:</span>
                        <span className="font-medium">1:8</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Research Output:</span>
                        <span className="font-medium">Very High</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Library Resources:</span>
                        <span className="font-medium">Excellent</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="costs">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-panda-purple mr-2" />
                      <CardTitle className="text-xl">{university1.name} Costs</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Tuition (International):</span>
                        <span className="font-medium">{university1.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Accommodation:</span>
                        <span className="font-medium">$12,000-$18,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Living Expenses:</span>
                        <span className="font-medium">$15,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Scholarship Availability:</span>
                        <span className="font-medium">Moderate</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <DollarSign className="h-5 w-5 text-panda-pink mr-2" />
                      <CardTitle className="text-xl">{university2.name} Costs</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Tuition (International):</span>
                        <span className="font-medium">{university2.tuition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Accommodation:</span>
                        <span className="font-medium">$14,000-$20,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Living Expenses:</span>
                        <span className="font-medium">$17,000/year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Scholarship Availability:</span>
                        <span className="font-medium">High</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="location">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-panda-purple mr-2" />
                      <CardTitle className="text-xl">{university1.name} Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Country:</span>
                        <span className="font-medium">{university1.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Climate:</span>
                        <span className="font-medium">Temperate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">City Type:</span>
                        <span className="font-medium">Historic University Town</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Safety Rating:</span>
                        <span className="font-medium">Very High</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Globe className="h-5 w-5 text-panda-pink mr-2" />
                      <CardTitle className="text-xl">{university2.name} Location</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Country:</span>
                        <span className="font-medium">{university2.country}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Climate:</span>
                        <span className="font-medium">Varies by Season</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">City Type:</span>
                        <span className="font-medium">Urban Campus</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Safety Rating:</span>
                        <span className="font-medium">High</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="life">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Activity className="h-5 w-5 text-panda-purple mr-2" />
                      <CardTitle className="text-xl">{university1.name} Student Life</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Campus Housing:</span>
                        <span className="font-medium">Guaranteed for first year</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Student Clubs:</span>
                        <span className="font-medium">400+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sports Facilities:</span>
                        <span className="font-medium">Excellent</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">International Support:</span>
                        <span className="font-medium">Comprehensive</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Activity className="h-5 w-5 text-panda-pink mr-2" />
                      <CardTitle className="text-xl">{university2.name} Student Life</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Campus Housing:</span>
                        <span className="font-medium">Limited, competitive</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Student Clubs:</span>
                        <span className="font-medium">500+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Sports Facilities:</span>
                        <span className="font-medium">World-class</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">International Support:</span>
                        <span className="font-medium">Extensive</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        )}

        {(!university1 || !university2) && (
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg text-center">
            <GraduationCap className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">Select two universities to compare</h3>
            <p className="text-gray-600 dark:text-gray-400">Choose from the dropdown menus above to see a detailed comparison.</p>
          </div>
        )}
      </div>
    </section>
  );
}