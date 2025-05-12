import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Languages, 
  BookOpen, 
  Headphones, 
  Film, 
  MessageSquare, 
  Globe, 
  User, 
  GraduationCap 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Language {
  id: string;
  name: string;
  nativeName: string;
  flagEmoji: string;
  countries: string[];
  difficulty: "easy" | "moderate" | "hard" | "very hard";
  basicPhrases: {
    phrase: string;
    pronunciation: string;
    meaning: string;
  }[];
  resources: {
    apps: {
      name: string;
      url: string;
      description: string;
      free: boolean;
    }[];
    websites: {
      name: string;
      url: string;
      description: string;
      free: boolean;
    }[];
    youtubeChannels: {
      name: string;
      url: string;
      description: string;
    }[];
  };
  academicRequirements: {
    test: string;
    description: string;
    levels: string[];
  }[];
  tips: string[];
}

const languages: Language[] = [
  {
    id: "english",
    name: "English",
    nativeName: "English",
    flagEmoji: "🇬🇧",
    countries: ["United States", "United Kingdom", "Canada", "Australia", "New Zealand"],
    difficulty: "easy",
    basicPhrases: [
      {
        phrase: "Hello",
        pronunciation: "heh-LOH",
        meaning: "Greeting"
      },
      {
        phrase: "Thank you",
        pronunciation: "THANK-yoo",
        meaning: "Expression of gratitude"
      },
      {
        phrase: "Excuse me",
        pronunciation: "ik-SKYOOZ-mee",
        meaning: "Getting attention or apologizing"
      },
      {
        phrase: "Where is...?",
        pronunciation: "WEHR iz",
        meaning: "Asking for directions"
      },
      {
        phrase: "How much is this?",
        pronunciation: "how MUCH iz THIS",
        meaning: "Asking for price"
      }
    ],
    resources: {
      apps: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
          description: "Gamified language learning with short lessons",
          free: true
        },
        {
          name: "BBC Learning English",
          url: "https://www.bbc.co.uk/learningenglish/",
          description: "Comprehensive English lessons from the BBC",
          free: true
        },
        {
          name: "HelloTalk",
          url: "https://www.hellotalk.com/",
          description: "Language exchange with native speakers",
          free: true
        }
      ],
      websites: [
        {
          name: "British Council",
          url: "https://learnenglish.britishcouncil.org/",
          description: "Official UK resources for English learners",
          free: true
        },
        {
          name: "engVid",
          url: "https://www.engvid.com/",
          description: "Free English video lessons for all levels",
          free: true
        },
        {
          name: "Grammarly",
          url: "https://www.grammarly.com/",
          description: "AI-powered writing assistant",
          free: false
        }
      ],
      youtubeChannels: [
        {
          name: "EnglishClass101",
          url: "https://www.youtube.com/user/EnglishClass101",
          description: "Conversational English lessons"
        },
        {
          name: "BBC Learning English",
          url: "https://www.youtube.com/user/bbclearningenglish",
          description: "Official BBC English lessons"
        },
        {
          name: "Rachel's English",
          url: "https://www.youtube.com/user/rachelsenglish",
          description: "Pronunciation and speaking practice"
        }
      ]
    },
    academicRequirements: [
      {
        test: "TOEFL",
        description: "Test of English as a Foreign Language",
        levels: ["0-30 (Basic)", "31-60 (Intermediate)", "61-90 (Advanced)", "91-120 (Expert)"]
      },
      {
        test: "IELTS",
        description: "International English Language Testing System",
        levels: ["Band 1-3 (Basic)", "Band 4-5 (Intermediate)", "Band 6-7 (Advanced)", "Band 8-9 (Expert)"]
      },
      {
        test: "Cambridge English",
        description: "Suite of English exams from Cambridge Assessment",
        levels: ["A1-A2 (Basic)", "B1-B2 (Intermediate)", "C1-C2 (Advanced)"]
      }
    ],
    tips: [
      "Watch TV shows and movies in English with subtitles",
      "Read news articles and books at your level",
      "Practice speaking with language exchange partners",
      "Listen to podcasts designed for English learners",
      "Use flashcards for vocabulary building"
    ]
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flagEmoji: "🇫🇷",
    countries: ["France", "Canada", "Belgium", "Switzerland", "Many African countries"],
    difficulty: "moderate",
    basicPhrases: [
      {
        phrase: "Bonjour",
        pronunciation: "bohn-ZHOOR",
        meaning: "Hello/Good day"
      },
      {
        phrase: "Merci",
        pronunciation: "mehr-SEE",
        meaning: "Thank you"
      },
      {
        phrase: "Excusez-moi",
        pronunciation: "ex-kew-ZAY-mwah",
        meaning: "Excuse me"
      },
      {
        phrase: "Où est...?",
        pronunciation: "oo-EH",
        meaning: "Where is...?"
      },
      {
        phrase: "Combien ça coûte?",
        pronunciation: "kom-BYEN sah KOOT",
        meaning: "How much does this cost?"
      }
    ],
    resources: {
      apps: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
          description: "Gamified language learning with short lessons",
          free: true
        },
        {
          name: "Babbel",
          url: "https://www.babbel.com/",
          description: "Conversation-focused language learning",
          free: false
        },
        {
          name: "TV5Monde",
          url: "https://langue-francaise.tv5monde.com/",
          description: "French lessons from the French TV network",
          free: true
        }
      ],
      websites: [
        {
          name: "Lawless French",
          url: "https://www.lawlessfrench.com/",
          description: "Comprehensive French learning resources",
          free: true
        },
        {
          name: "France Podcast",
          url: "https://www.francepodcasts.com/",
          description: "Podcasts for French learners at different levels",
          free: true
        },
        {
          name: "RFI Savoirs",
          url: "https://savoirs.rfi.fr/",
          description: "French learning resources from Radio France International",
          free: true
        }
      ],
      youtubeChannels: [
        {
          name: "Français Authentique",
          url: "https://www.youtube.com/user/francaisauthentique",
          description: "Natural French learning"
        },
        {
          name: "Learn French with Alexa",
          url: "https://www.youtube.com/user/learnfrenchwithalexa",
          description: "Structured lessons for beginners"
        },
        {
          name: "Easy French",
          url: "https://www.youtube.com/channel/UCqcBu0YyEJH4vfKR--97cng",
          description: "Street interviews with French speakers"
        }
      ]
    },
    academicRequirements: [
      {
        test: "DELF",
        description: "Diplôme d'études en langue française",
        levels: ["A1 (Beginner)", "A2 (Elementary)", "B1 (Intermediate)", "B2 (Upper Intermediate)"]
      },
      {
        test: "DALF",
        description: "Diplôme approfondi de langue française",
        levels: ["C1 (Advanced)", "C2 (Proficient)"]
      },
      {
        test: "TCF",
        description: "Test de connaissance du français",
        levels: ["A1-A2 (Basic)", "B1-B2 (Intermediate)", "C1-C2 (Advanced)"]
      }
    ],
    tips: [
      "French pronunciation is challenging – focus on mastering vowel sounds",
      "Practice gender rules with nouns – use color coding in your notes",
      "Watch French films with subtitles",
      "Listen to French music and try to translate lyrics",
      "Find a language exchange partner for conversation practice"
    ]
  },
  {
    id: "german",
    name: "German",
    nativeName: "Deutsch",
    flagEmoji: "🇩🇪",
    countries: ["Germany", "Austria", "Switzerland", "Liechtenstein", "Luxembourg"],
    difficulty: "moderate",
    basicPhrases: [
      {
        phrase: "Hallo",
        pronunciation: "HAH-loh",
        meaning: "Hello"
      },
      {
        phrase: "Danke",
        pronunciation: "DAHN-kuh",
        meaning: "Thank you"
      },
      {
        phrase: "Entschuldigung",
        pronunciation: "ent-SHOOL-di-goong",
        meaning: "Excuse me"
      },
      {
        phrase: "Wo ist...?",
        pronunciation: "voh ist",
        meaning: "Where is...?"
      },
      {
        phrase: "Wie viel kostet das?",
        pronunciation: "vee feel KOS-tet das",
        meaning: "How much does this cost?"
      }
    ],
    resources: {
      apps: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
          description: "Gamified language learning with short lessons",
          free: true
        },
        {
          name: "Lingvist",
          url: "https://lingvist.com/",
          description: "Fast vocabulary acquisition with spaced repetition",
          free: false
        },
        {
          name: "DW Learn German",
          url: "https://learngerman.dw.com/",
          description: "Free German courses from Deutsche Welle",
          free: true
        }
      ],
      websites: [
        {
          name: "German.net",
          url: "https://www.german.net/",
          description: "Grammar, vocabulary, and exercises",
          free: true
        },
        {
          name: "Goethe Institut",
          url: "https://www.goethe.de/en/spr/kur.html",
          description: "Official German cultural institute resources",
          free: true
        },
        {
          name: "Lingoda",
          url: "https://www.lingoda.com/en/german/",
          description: "Online German classes with native speakers",
          free: false
        }
      ],
      youtubeChannels: [
        {
          name: "Easy German",
          url: "https://www.youtube.com/c/EasyGerman",
          description: "Street interviews and natural German conversations"
        },
        {
          name: "Get Germanized",
          url: "https://www.youtube.com/user/MeisterLehnsherr",
          description: "German language and culture"
        },
        {
          name: "Deutsch für Euch",
          url: "https://www.youtube.com/user/DeutschFuerEuch",
          description: "Comprehensive German lessons"
        }
      ]
    },
    academicRequirements: [
      {
        test: "Goethe-Zertifikat",
        description: "Official German language exam from the Goethe Institut",
        levels: ["A1 (Beginner)", "A2 (Elementary)", "B1 (Intermediate)", "B2 (Upper Intermediate)", "C1 (Advanced)", "C2 (Proficient)"]
      },
      {
        test: "TestDaF",
        description: "Test Deutsch als Fremdsprache for university admission",
        levels: ["TDN 3 (B2.1)", "TDN 4 (B2.2)", "TDN 5 (C1)"]
      },
      {
        test: "DSH",
        description: "Deutsche Sprachprüfung für den Hochschulzugang",
        levels: ["DSH-1 (B2)", "DSH-2 (C1)", "DSH-3 (C1+)"]
      }
    ],
    tips: [
      "German grammar follows logical patterns – learn the rules and exceptions",
      "Focus on noun genders (der, die, das) from the beginning",
      "Read German news websites with simpler language like 'Nachrichten Leicht'",
      "Create flashcards for case endings and prepositions",
      "Join German conversation groups online or in your area"
    ]
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flagEmoji: "🇯🇵",
    countries: ["Japan"],
    difficulty: "very hard",
    basicPhrases: [
      {
        phrase: "こんにちは (Konnichiwa)",
        pronunciation: "kon-nee-chee-wah",
        meaning: "Hello/Good afternoon"
      },
      {
        phrase: "ありがとう (Arigatou)",
        pronunciation: "ah-ree-gah-toh",
        meaning: "Thank you"
      },
      {
        phrase: "すみません (Sumimasen)",
        pronunciation: "soo-mee-mah-sen",
        meaning: "Excuse me/I'm sorry"
      },
      {
        phrase: "どこですか (Doko desu ka)",
        pronunciation: "doh-koh des-kah",
        meaning: "Where is it?"
      },
      {
        phrase: "いくらですか (Ikura desu ka)",
        pronunciation: "ee-koo-rah des-kah",
        meaning: "How much is it?"
      }
    ],
    resources: {
      apps: [
        {
          name: "Duolingo",
          url: "https://www.duolingo.com/",
          description: "Gamified language learning with short lessons",
          free: true
        },
        {
          name: "WaniKani",
          url: "https://www.wanikani.com/",
          description: "Kanji learning system using spaced repetition",
          free: false
        },
        {
          name: "Bunpo",
          url: "https://bunpo.app/",
          description: "Japanese grammar learning app",
          free: false
        }
      ],
      websites: [
        {
          name: "Tae Kim's Guide",
          url: "http://www.guidetojapanese.org/",
          description: "Comprehensive grammar guide",
          free: true
        },
        {
          name: "NHK Easy Japanese",
          url: "https://www3.nhk.or.jp/news/easy/",
          description: "Simplified news for Japanese learners",
          free: true
        },
        {
          name: "Japanesepod101",
          url: "https://www.japanesepod101.com/",
          description: "Audio lessons and learning resources",
          free: false
        }
      ],
      youtubeChannels: [
        {
          name: "Japanese Ammo with Misa",
          url: "https://www.youtube.com/c/JapaneseAmmowithMisa",
          description: "Detailed grammar and vocabulary lessons"
        },
        {
          name: "Dogen",
          url: "https://www.youtube.com/user/Dogen",
          description: "Japanese phonetics and pitch accent"
        },
        {
          name: "Onomappu",
          url: "https://www.youtube.com/c/Onomappu",
          description: "Fun Japanese learning content"
        }
      ]
    },
    academicRequirements: [
      {
        test: "JLPT",
        description: "Japanese Language Proficiency Test",
        levels: ["N5 (Basic)", "N4 (Elementary)", "N3 (Intermediate)", "N2 (Upper Intermediate)", "N1 (Advanced)"]
      },
      {
        test: "J.TEST",
        description: "Test of Practical Japanese",
        levels: ["E-F (Basic)", "C-D (Intermediate)", "A-B (Advanced)"]
      },
      {
        test: "BJT",
        description: "Business Japanese Proficiency Test",
        levels: ["J5 (Basic)", "J4-J3 (Intermediate)", "J2-J1 (Advanced)"]
      }
    ],
    tips: [
      "Start with learning hiragana and katakana completely before moving to kanji",
      "Use mnemonics to remember kanji characters",
      "Practice speaking from the beginning to get used to proper pronunciation",
      "Watch anime with Japanese subtitles to practice reading",
      "Use spaced repetition systems (SRS) for vocabulary retention"
    ]
  },
  {
    id: "mandarin",
    name: "Mandarin Chinese",
    nativeName: "普通话",
    flagEmoji: "🇨🇳",
    countries: ["China", "Taiwan", "Singapore"],
    difficulty: "very hard",
    basicPhrases: [
      {
        phrase: "你好 (Nǐ hǎo)",
        pronunciation: "nee-HOW",
        meaning: "Hello"
      },
      {
        phrase: "谢谢 (Xièxiè)",
        pronunciation: "shyeh-shyeh",
        meaning: "Thank you"
      },
      {
        phrase: "对不起 (Duìbùqǐ)",
        pronunciation: "dway-boo-chee",
        meaning: "Sorry"
      },
      {
        phrase: "在哪里? (Zài nǎlǐ?)",
        pronunciation: "dzai na-lee",
        meaning: "Where is it?"
      },
      {
        phrase: "多少钱? (Duōshǎo qián?)",
        pronunciation: "dwoh-shaow chyen",
        meaning: "How much money?"
      }
    ],
    resources: {
      apps: [
        {
          name: "HelloChinese",
          url: "https://www.hellochinese.cc/",
          description: "App designed specifically for Chinese learners",
          free: true
        },
        {
          name: "Pleco",
          url: "https://www.pleco.com/",
          description: "The best Chinese dictionary app with flashcards",
          free: true
        },
        {
          name: "Skritter",
          url: "https://skritter.com/",
          description: "Learn to write Chinese characters",
          free: false
        }
      ],
      websites: [
        {
          name: "Chinese Grammar Wiki",
          url: "https://resources.allsetlearning.com/chinese/grammar/",
          description: "Comprehensive Chinese grammar resource",
          free: true
        },
        {
          name: "HSK Academy",
          url: "https://www.hsk.academy/",
          description: "HSK test preparation materials",
          free: true
        },
        {
          name: "ChinesePod",
          url: "https://chinesepod.com/",
          description: "Audio lessons for all levels",
          free: false
        }
      ],
      youtubeChannels: [
        {
          name: "Mandarin Corner",
          url: "https://www.youtube.com/c/MandarinCorner",
          description: "Real-life Chinese conversations with subtitles"
        },
        {
          name: "Chinese With Jessie",
          url: "https://www.youtube.com/channel/UCg0IlFj8DBtEGdHBq8PcUUw",
          description: "Lessons focusing on daily conversations"
        },
        {
          name: "Everyday Chinese",
          url: "https://www.youtube.com/c/EverydayChinese",
          description: "Practical Chinese for everyday situations"
        }
      ]
    },
    academicRequirements: [
      {
        test: "HSK",
        description: "Hanyu Shuiping Kaoshi (Chinese Proficiency Test)",
        levels: ["HSK 1-2 (Basic)", "HSK 3-4 (Intermediate)", "HSK 5-6 (Advanced)"]
      },
      {
        test: "TOCFL",
        description: "Test of Chinese as a Foreign Language (Taiwan)",
        levels: ["A1-A2 (Novice)", "B1-B2 (Intermediate)", "C1-C2 (Advanced)"]
      },
      {
        test: "BCT",
        description: "Business Chinese Test",
        levels: ["BCT (A) Basic", "BCT (B) Intermediate", "BCT (C) Advanced"]
      }
    ],
    tips: [
      "Focus on tones from the beginning – they change meaning completely",
      "Learn characters along with pronunciation and meaning",
      "Use character components (radicals) to help memorize new characters",
      "Practice writing characters by hand, not just typing",
      "Find a language exchange partner who speaks Mandarin"
    ]
  }
];

export default function LanguageResources() {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("phrases");
  
  const languageData = languages.find(lang => lang.id === selectedLanguage);
  
  const getDifficultyColor = (difficulty: string): string => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'hard': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'very hard': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200';
    }
  };

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Language Learning Resources
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Prepare for your study abroad experience by learning useful phrases and discovering resources for learning the local language.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 mb-8 max-w-md mx-auto">
          <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
            Select a Language
          </label>
          <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Choose a language" />
            </SelectTrigger>
            <SelectContent>
              {languages.map(language => (
                <SelectItem key={language.id} value={language.id}>
                  <div className="flex items-center">
                    <span className="mr-2">{language.flagEmoji}</span>
                    {language.name} ({language.nativeName})
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {languageData ? (
          <Card className="max-w-4xl mx-auto">
            <CardHeader className="flex flex-col space-y-1.5 pb-6 border-b">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-4xl mr-3">{languageData.flagEmoji}</span>
                  <div>
                    <CardTitle className="text-2xl">
                      {languageData.name} ({languageData.nativeName})
                    </CardTitle>
                    <CardDescription>
                      Spoken in: {languageData.countries.join(", ")}
                    </CardDescription>
                  </div>
                </div>
                <Badge className={getDifficultyColor(languageData.difficulty)}>
                  {languageData.difficulty.charAt(0).toUpperCase() + languageData.difficulty.slice(1)} difficulty
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <Tabs value={activeTab} onValueChange={setActiveTab}>
                <TabsList className="grid grid-cols-4 mb-6">
                  <TabsTrigger value="phrases">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Basic Phrases
                  </TabsTrigger>
                  <TabsTrigger value="resources">
                    <BookOpen className="h-4 w-4 mr-2" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger value="academic">
                    <GraduationCap className="h-4 w-4 mr-2" />
                    Academic Tests
                  </TabsTrigger>
                  <TabsTrigger value="tips">
                    <User className="h-4 w-4 mr-2" />
                    Learning Tips
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="phrases" className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    {languageData.basicPhrases.map((phrase, index) => (
                      <div 
                        key={index} 
                        className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md"
                      >
                        <h3 className="text-lg font-semibold text-panda-purple dark:text-panda-lav mb-1">
                          {phrase.phrase}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                          Pronunciation: {phrase.pronunciation}
                        </p>
                        <p className="text-sm text-gray-700 dark:text-gray-300">
                          Meaning: {phrase.meaning}
                        </p>
                      </div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="resources">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                        <Globe className="h-5 w-5 mr-2 text-panda-purple" />
                        Apps
                      </h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        {languageData.resources.apps.map((app, index) => (
                          <a 
                            key={index} 
                            href={app.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-panda-purple dark:text-panda-lav">
                                {app.name}
                              </h4>
                              <Badge variant={app.free ? "outline" : "secondary"}>
                                {app.free ? "Free" : "Paid"}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {app.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                        <Headphones className="h-5 w-5 mr-2 text-panda-pink" />
                        Websites
                      </h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        {languageData.resources.websites.map((site, index) => (
                          <a 
                            key={index} 
                            href={site.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <div className="flex justify-between items-start mb-2">
                              <h4 className="font-medium text-panda-pink dark:text-panda-pink">
                                {site.name}
                              </h4>
                              <Badge variant={site.free ? "outline" : "secondary"}>
                                {site.free ? "Free" : "Paid"}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {site.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                        <Film className="h-5 w-5 mr-2 text-panda-yellow" />
                        YouTube Channels
                      </h3>
                      <div className="grid md:grid-cols-3 gap-3">
                        {languageData.resources.youtubeChannels.map((channel, index) => (
                          <a 
                            key={index} 
                            href={channel.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                          >
                            <h4 className="font-medium text-panda-yellow dark:text-panda-yellow mb-2">
                              {channel.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {channel.description}
                            </p>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="academic">
                  <div className="space-y-6">
                    {languageData.academicRequirements.map((test, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
                          {test.test}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                          {test.description}
                        </p>
                        <div className="mt-2">
                          <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Proficiency Levels:</h4>
                          <div className="flex flex-wrap gap-2">
                            {test.levels.map((level, idx) => (
                              <Badge key={idx} variant="outline" className="bg-panda-lav/10 text-panda-purple">
                                {level}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div className="p-4 bg-panda-purple/10 rounded-md">
                      <h3 className="font-medium text-panda-purple mb-2">Academic Requirements Note</h3>
                      <p className="text-sm text-gray-700 dark:text-gray-300">
                        Always check the specific language requirements for your university and program, as they may vary. Most universities specify minimum scores needed for admission.
                      </p>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tips">
                  <div className="space-y-4">
                    <h3 className="text-xl font-medium text-gray-800 dark:text-white flex items-center mb-3">
                      <Languages className="h-5 w-5 mr-2 text-panda-lav" />
                      Tips for Learning {languageData.name}
                    </h3>
                    <ul className="space-y-3">
                      {languageData.tips.map((tip, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-panda-purple font-bold mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{tip}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6 bg-gray-50 dark:bg-gray-800 p-4 rounded-md">
                      <h4 className="font-medium text-gray-800 dark:text-white mb-2">Time Commitment</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        For {languageData.name}, expect to spend:
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-700 dark:text-gray-300">
                        <li>• 1-2 hours daily for optimal progress</li>
                        <li>• At least 3-4 months for basic conversation skills</li>
                        <li>• 1-2 years for conversational fluency</li>
                        <li>• 3-5 years for advanced proficiency</li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto bg-white dark:bg-gray-700 rounded-xl shadow-md p-12 text-center">
            <Languages className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select a language to begin
            </h3>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto mb-8">
              Choose a language from the dropdown above to explore useful phrases, learning resources, and study tips for your host country.
            </p>
            <div className="grid grid-cols-5 gap-3 max-w-lg mx-auto">
              {languages.slice(0, 5).map(language => (
                <Button 
                  key={language.id}
                  variant="outline" 
                  size="icon" 
                  className="text-2xl rounded-full h-12 w-12"
                  onClick={() => setSelectedLanguage(language.id)}
                >
                  {language.flagEmoji}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}