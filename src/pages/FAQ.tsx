import { Navigation } from '@/components/Navigation';
import { FooterSection } from '@/components/FooterSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle, MessageCircle, Mail } from 'lucide-react';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Company & Technology",
      questions: [
        {
          question: "What is Oncolytics Biotech and what do you do?",
          answer: "Oncolytics Biotech is a clinical-stage biotechnology company developing pelareorep, a first-in-class ds-RNA oncolytic virus for treating gastrointestinal cancers. Our platform specifically targets RAS-mutated cancer cells, which represent a significant proportion of GI cancers."
        },
        {
          question: "How does pelareorep work?",
          answer: "Pelareorep is a double-stranded RNA (ds-RNA) oncolytic virus that selectively replicates in cancer cells with RAS pathway mutations. It works through a dual mechanism: direct tumor cell lysis and activation of the immune system to create a 'hot' tumor environment that attacks cancer cells."
        },
        {
          question: "What makes your approach different from other cancer treatments?",
          answer: "Our ds-RNA oncolytic virus is administered intravenously and is not neutralized in the blood, allowing it to reach all tumor sites systemically. Unlike many other treatments, pelareorep works exactly as designed with an established safety profile from 1,100+ patients dosed over 15 years."
        },
        {
          question: "What is the GOBLET study?",
          answer: "GOBLET is our ongoing clinical study in partnership with Roche, evaluating pelareorep in combination with standard of care in patients with squamous cell anal carcinoma (SCAC) and metastatic pancreatic ductal adenocarcinoma (mPDAC). Interim data is expected Q4 2025."
        }
      ]
    },
    {
      category: "Clinical Development",
      questions: [
        {
          question: "What indications are you targeting?",
          answer: "We focus on three high-value GI indications: 1L metastatic pancreatic cancer (mPDAC), 2L metastatic colorectal cancer (mCRC), and squamous cell anal carcinoma (SCAC). These represent a combined $16B+ total addressable market with 1.9M+ global patients."
        },
        {
          question: "What clinical results have you shown?",
          answer: "Our clinical studies have demonstrated 2-3x survival improvements versus standard of care in mCRC, ~22% vs ~9% 2-year survival in mPDAC, and 33% vs 11-24% overall response rate in SCAC. Pelareorep has been found in almost all tumor biopsies, proving successful viral delivery."
        },
        {
          question: "What regulatory designations do you have?",
          answer: "We have received FDA Fast Track designation and Orphan Drug designation for pelareorep in first-line metastatic pancreatic ductal adenocarcinoma (mPDAC), which supports accelerated development and regulatory review."
        },
        {
          question: "When will you start Phase 3 studies?",
          answer: "We plan to initiate our Phase 3 registration study in 1L mPDAC in Q4 2025, with the mCRC registration study planned for 1H 2026. All studies are designed to be registration-enabling."
        }
      ]
    },
    {
      category: "Business & Investment",
      questions: [
        {
          question: "What is your stock symbol and where do you trade?",
          answer: "We trade on NASDAQ under the symbol 'ONCY'. We are also listed on the Toronto Stock Exchange under the same symbol. Our shares outstanding are approximately 77.2 million."
        },
        {
          question: "Do you have strategic partnerships?",
          answer: "Yes, we have a strategic partnership with Roche for the GOBLET study, which validates our platform and provides significant partnership opportunities. We are focused on forming additional partnerships with large pharmaceutical companies."
        },
        {
          question: "What is your intellectual property position?",
          answer: "We have strong intellectual property protection extending to 2044, covering our ds-RNA oncolytic virus platform, manufacturing processes, and clinical applications. Our pelareorep is made in America and is non-GMO."
        },
        {
          question: "How is pelareorep manufactured?",
          answer: "Pelareorep is manufactured in the United States using a non-GMO process. The manufacturing is designed to be easily scalable commercially with high yield and low cost of goods, supporting our future commercial strategy."
        }
      ]
    },
    {
      category: "Safety & Regulatory",
      questions: [
        {
          question: "Is pelareorep safe?",
          answer: "Yes, pelareorep has an established safety profile based on 15 years of clinical experience with 1,100+ patients dosed across multiple studies. The ds-RNA mechanism works exactly as designed and has been well-tolerated in clinical trials."
        },
        {
          question: "What are the main side effects?",
          answer: "Pelareorep has been generally well-tolerated in clinical studies. The most common side effects are typically mild to moderate and consistent with what would be expected from an immune-activating therapy. Detailed safety data is available in our published clinical studies."
        },
        {
          question: "How do you ensure product quality?",
          answer: "Our manufacturing follows Good Manufacturing Practice (GMP) standards with rigorous quality control. Being manufactured in America allows for close oversight and adherence to FDA quality standards throughout the production process."
        },
        {
          question: "What regulatory approvals are you seeking?",
          answer: "We are developing pelareorep for regulatory approval in the United States and internationally. Our registration-enabled studies are designed to support new drug applications (NDAs) with regulatory agencies including the FDA."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Frequently Asked Questions
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
                Common Questions & Answers
              </h1>
              <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                Get answers to frequently asked questions about Oncolytics Biotech, 
                our ds-RNA oncolytic virus platform, clinical studies, and business strategy.
              </p>
            </div>

            {/* FAQ Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-3xl mx-auto">
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">16</div>
                  <div className="text-sm text-muted-foreground">Common Questions</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">4</div>
                  <div className="text-sm text-muted-foreground">Topic Categories</div>
                </CardContent>
              </Card>
              
              <Card className="text-center border-border/50 shadow-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Contact Support</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {faqCategories.map((category, categoryIndex) => (
                <Card key={categoryIndex} className="mb-8 border-border/50 shadow-card">
                  <CardHeader>
                    <CardTitle className="text-xl text-secondary">{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      {category.questions.map((faq, questionIndex) => (
                        <AccordionItem 
                          key={questionIndex} 
                          value={`${categoryIndex}-${questionIndex}`}
                          className="border-border/50"
                        >
                          <AccordionTrigger className="text-left hover:text-primary transition-colors">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-muted-foreground leading-relaxed">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Support */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-6 text-center">
            <Card className="max-w-2xl mx-auto border-border/50 shadow-elegant">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Still Have Questions?</h3>
                <p className="text-muted-foreground mb-6">
                  Can't find the answer you're looking for? Our team is here to help with 
                  any questions about our science, clinical programs, or investment opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="bg-gradient-primary hover:opacity-90">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Us
                  </Button>
                  <Button variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Investor Relations
                  </Button>
                </div>
                <div className="mt-6 pt-6 border-t border-border/50 text-sm text-muted-foreground">
                  <p><strong>General Inquiries:</strong> info@oncolyticsbiotech.com</p>
                  <p><strong>Investor Relations:</strong> ir@oncolyticsbiotech.com</p>
                  <p><strong>Phone:</strong> +1 (403) 828-7670</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default FAQ;