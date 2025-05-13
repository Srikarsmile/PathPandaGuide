import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Helmet } from "react-helmet";
import Header from "@/components/header";
import Footer from "@/components/footer";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Calendar, Clock, GraduationCap, Globe, Map, BookOpen, MessageSquare } from "lucide-react";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const consultFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(6, { message: "Please enter a valid phone number." }).optional(),
  currentCountry: z.string().min(1, { message: "Please select your current country." }),
  targetCountry: z.string().min(1, { message: "Please select your desired study destination." }),
  studyLevel: z.string().min(1, { message: "Please select your study level." }),
  studyField: z.string().min(1, { message: "Please enter your field of study." }),
  preferredDate: z.date({ message: "Please select a preferred date." }),
  preferredTime: z.string().min(1, { message: "Please select a preferred time." }),
  message: z.string().optional(),
});

type ConsultFormValues = z.infer<typeof consultFormSchema>;

export default function Consult() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ConsultFormValues>({
    resolver: zodResolver(consultFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      currentCountry: "",
      targetCountry: "",
      studyLevel: "",
      studyField: "",
      message: "",
    },
  });

  const onSubmit = async (data: ConsultFormValues) => {
    setIsSubmitting(true);
    try {
      // Simulating API call
      console.log("Submitting data:", data);
      
      // In a real app, you would call the API
      // await apiRequest('/api/consult', {
      //   method: "POST",
      //   body: JSON.stringify(data)
      // });
      
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSuccess(true);
      toast({
        title: "Consultation booked!",
        description: "We'll email you shortly with confirmation details.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Your consultation couldn't be booked. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Book a Consultation | Path Panda</title>
        <meta name="description" content="Book a free consultation with our educational experts to discuss your study abroad opportunities, visa guidance, and scholarship options." />
      </Helmet>

      <Header />

      <main className="bg-gradient-to-b from-panda-purple/5 to-panda-lav/5">
        <section className="py-16 md:py-24">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center bg-panda-lav/10 rounded-full py-1 px-3 md:px-4 mb-3 md:mb-4">
                  <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-panda-lav mr-1.5 md:mr-2"></span>
                  <span className="text-xs md:text-sm font-medium text-panda-lav">Free Consultation</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 dark:text-white mb-4">
                  Book Your Free Study Abroad Consultation
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Get personalized guidance from our education experts to help plan your international academic journey
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-10 text-center">
                  <div className="w-16 h-16 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
                    Thank You for Booking a Consultation!
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 mb-8">
                    We've received your request for a consultation on{' '}
                    <span className="font-medium text-panda-purple dark:text-panda-lav">
                      {form.getValues('preferredDate') && format(form.getValues('preferredDate'), 'MMMM d, yyyy')} at {form.getValues('preferredTime')}
                    </span>. We'll send you a confirmation email with all the details and a calendar invite.
                  </p>
                  <div className="space-y-4 md:space-y-0 md:flex md:space-x-4 justify-center">
                    <Button 
                      variant="outline" 
                      className="w-full md:w-auto"
                      onClick={() => {
                        form.reset();
                        setIsSuccess(false);
                      }}
                    >
                      Book Another Consultation
                    </Button>
                    <Button 
                      className="w-full md:w-auto bg-panda-purple hover:bg-panda-purple/90"
                      onClick={() => window.location.href = '/'}
                    >
                      Return to Home
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-6 md:p-10 border border-gray-100 dark:border-gray-700">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">Full Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your name" 
                                  className="rounded-lg" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">Email</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="Your email address" 
                                  className="rounded-lg" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">
                                Phone Number <span className="text-gray-400 text-sm">(Optional)</span>
                              </FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your phone number" 
                                  className="rounded-lg" 
                                  {...field} 
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="currentCountry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">Current Country</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select your current country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="india">India</SelectItem>
                                  <SelectItem value="china">China</SelectItem>
                                  <SelectItem value="nigeria">Nigeria</SelectItem>
                                  <SelectItem value="usa">United States</SelectItem>
                                  <SelectItem value="uk">United Kingdom</SelectItem>
                                  <SelectItem value="canada">Canada</SelectItem>
                                  <SelectItem value="australia">Australia</SelectItem>
                                  <SelectItem value="brazil">Brazil</SelectItem>
                                  <SelectItem value="south_korea">South Korea</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="targetCountry"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">
                                Desired Study Destination
                              </FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select a country" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="usa">United States</SelectItem>
                                  <SelectItem value="uk">United Kingdom</SelectItem>
                                  <SelectItem value="canada">Canada</SelectItem>
                                  <SelectItem value="australia">Australia</SelectItem>
                                  <SelectItem value="germany">Germany</SelectItem>
                                  <SelectItem value="france">France</SelectItem>
                                  <SelectItem value="netherlands">Netherlands</SelectItem>
                                  <SelectItem value="sweden">Sweden</SelectItem>
                                  <SelectItem value="japan">Japan</SelectItem>
                                  <SelectItem value="singapore">Singapore</SelectItem>
                                  <SelectItem value="other">Other</SelectItem>
                                  <SelectItem value="undecided">Undecided</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="studyLevel"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">Study Level</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select your study level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                                  <SelectItem value="master">Master's Degree</SelectItem>
                                  <SelectItem value="phd">PhD / Doctoral</SelectItem>
                                  <SelectItem value="diploma">Diploma / Certificate</SelectItem>
                                  <SelectItem value="highschool">High School</SelectItem>
                                  <SelectItem value="language">Language Course</SelectItem>
                                  <SelectItem value="undecided">Undecided</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="studyField"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">Field of Study</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="e.g. Computer Science, Business, Medicine" 
                                className="rounded-lg" 
                                {...field} 
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="grid md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={({ field }) => (
                            <FormItem className="flex flex-col">
                              <FormLabel className="text-gray-700 dark:text-gray-300">Preferred Consultation Date</FormLabel>
                              <Popover>
                                <PopoverTrigger asChild>
                                  <FormControl>
                                    <Button
                                      variant={"outline"}
                                      className={cn(
                                        "w-full pl-3 text-left font-normal rounded-lg",
                                        !field.value && "text-muted-foreground"
                                      )}
                                    >
                                      {field.value ? (
                                        format(field.value, "PPP")
                                      ) : (
                                        <span>Pick a date</span>
                                      )}
                                      <Calendar className="ml-auto h-4 w-4 opacity-50" />
                                    </Button>
                                  </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-auto p-0" align="start">
                                  <CalendarComponent
                                    mode="single"
                                    selected={field.value}
                                    onSelect={field.onChange}
                                    disabled={(date) => 
                                      date < new Date(new Date().setHours(0, 0, 0, 0)) ||
                                      // Disable weekends
                                      date.getDay() === 0 || 
                                      date.getDay() === 6
                                    }
                                    initialFocus
                                  />
                                </PopoverContent>
                              </Popover>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="preferredTime"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-700 dark:text-gray-300">Preferred Time</FormLabel>
                              <Select onValueChange={field.onChange} defaultValue={field.value}>
                                <FormControl>
                                  <SelectTrigger className="rounded-lg">
                                    <SelectValue placeholder="Select a time slot" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                                  <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                                  <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                                  <SelectItem value="12:00 PM">12:00 PM</SelectItem>
                                  <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                                  <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                                  <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                                  <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                                  <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-gray-700 dark:text-gray-300">
                              Additional Information <span className="text-gray-400 text-sm">(Optional)</span>
                            </FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Tell us about your specific requirements or questions"
                                className="resize-none rounded-lg min-h-[120px]"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="pt-2">
                        <Button 
                          type="submit" 
                          disabled={isSubmitting}
                          className="w-full md:w-auto bg-panda-purple hover:bg-panda-purple/90 text-white py-6 px-8 rounded-xl text-lg flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center">
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Processing...
                            </span>
                          ) : (
                            "Book Consultation"
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container px-4 mx-auto">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
                What to Expect in Your Consultation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex">
                  <div className="w-12 h-12 rounded-full bg-panda-yellow/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-panda-yellow" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                      Academic Assessment
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Our experts will evaluate your academic background to suggest suitable programs and universities that match your profile.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex">
                  <div className="w-12 h-12 rounded-full bg-panda-pink/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Map className="w-6 h-6 text-panda-pink" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                      Destination Guidance
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Get insights on different study destinations, their education systems, cost of living, and job opportunities after graduation.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex">
                  <div className="w-12 h-12 rounded-full bg-panda-purple/10 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="w-6 h-6 text-panda-purple" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                      Visa Requirements
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Understand the visa application process, documentation requirements, and preparation tips to increase your visa approval chances.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <BookOpen className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                      Scholarship Options
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Explore available scholarships, financial aid, and funding opportunities based on your academic achievements and target institutions.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700 shadow-sm flex md:col-span-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MessageSquare className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-gray-800 dark:text-white">
                      Personalized Action Plan
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">
                      Receive a customized roadmap with next steps, application timeline, test preparation strategies, and document checklist to streamline your study abroad journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}