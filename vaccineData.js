const VACCINE_DATABASE= 
    [
            { name: "BCG",ageText: "At Birth", sideEffects: "Small, temporary ulcer at injection site.", redFlags: "Not for immunocompromised infants. Always consult a pediatrician."},
            { name: "Hepatitis B - Birth Dose",ageText: "At Birth", sideEffects: "Soreness, slight fever.", redFlags: "None (very safe)."},
            { name: "OPV-0 (Birth)",ageText: "At Birth", sideEffects: "None/Mild stomach upset.", redFlags: "Not applicable."},

            { name: "Pentavalent / DPT1 + Hib + HepB1 + IPV1",ageText: "6 Weeks", sideEffects: "Fever, pain, swelling at injection site.", redFlags: "Seek medical care for severe/persistent fever or swelling."},
            { name: "OPV1",ageText: "6 Weeks", sideEffects: "Mild stomach upset.", redFlags: "Not applicable."},
            { name: "Rotavirus1",ageText: "6 Weeks", sideEffects: "Mild diarrhea or vomiting.", redFlags: "Seek medical care if baby has bloody stools."},

            { name: "Pentavalent / DPT2 + Hib + HepB2 + IPV2",ageText: "10 Weeks", sideEffects: "Fever, pain, swelling at injection site.", redFlags: "Seek medical care for severe/persistent fever or swelling."},
            { name: "OPV2",ageText: "10 Weeks", sideEffects: "Mild stomach upset.", redFlags: "Not applicable."},
            { name: "Rotavirus2",ageText: "10 Weeks", sideEffects: "Mild diarrhea or vomiting.", redFlags: "Seek medical care if baby has bloody stools."},

            { name: "Pentavalent / DPT3 + Hib + HepB3 + IPV3",ageText: "14 Weeks", sideEffects: "Fever, pain, swelling at injection site.", redFlags: "Seek medical care for severe/persistent fever or swelling."},
            { name: "OPV3",ageText: "14 Weeks", sideEffects: "Mild stomach upset.", redFlags: "Not applicable."},
            { name: "Rotavirus3",ageText: "14 Weeks", sideEffects: "Mild diarrhea or vomiting.", redFlags: "Seek medical care if baby has bloody stools."},

            { name: "PCV Booster & IPV Booster",ageText: "9-12 Months", sideEffects: "Soreness, fussiness, mild fever.", redFlags: "None. Follow doctor's advice."},
            { name: "MR / Measles-Rubella first dose",ageText: "9-12 Months", sideEffects: "Mild rash or fever 7-10 days later.", redFlags: "Not for pregnant women or severely immunocompromised."},
            
            { name: "DPT Booster-1, OPV Booster, MR-2, JE-2",ageText: "16-24 Months", sideEffects: "Fever, pain, swelling.", redFlags: "Seek medical care for severe/persistent fever or swelling."},

            { name: "DPT Booster-2",ageText: "5-6 Years", sideEffects: "Pain at site, mild fever.", redFlags: "None."},

            { name: "Td / Tetanus-Diphtheria Booster",ageText: "10 Years", sideEffects: "Arm soreness, headache.", redFlags: "None."},
            { name: "Td Booster",ageText: "16 Years", sideEffects: "Arm soreness, headache.", redFlags: "None."}
    ];