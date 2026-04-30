const MEDICINE_DATABASE = 
    [
            { 
                name: "Paracetamol", 
                uses: "Pain relief and fever reduction", 
                doseInfo: "Dosing is weight-based (10-15 mg/kg per dose). Usually every 4-6 hours. Never exceed 5 doses in 24 hours.", 
                safetyNotes: "Overdose can cause severe liver damage. Always check concentration (e.g., 120mg/5ml vs 250mg/5ml).", 
                warnings: "Severe abdominal pain or yellowing of the skin (jaundice)."
            },
            { 
                name: "Ibuprofen", 
                uses: "Pain, fever, and inflammation reduction (NSAID).", 
                doseInfo: "Dosing is weight-based (5-10 mg/kg per dose). Usually every 6-8 hours. Give with food or milk.", 
                safetyNotes: "Avoid in infants under 6 months. Can irritate the stomach lining.", 
                warnings: "Bloody stools, severe rash, or signs of allergic reaction."
            },
            { 
                name: "Amoxicillin", 
                uses: "Treatment of bacterial infections (e.g., ear, throat, chest infections).", 
                doseInfo: "Dosed by weight, typically 2 or 3 times a day. **Complete the full course** as prescribed.", 
                safetyNotes: "Common side effects include diarrhea and rash. Do not stop early, even if symptoms improve.", 
                warnings: "Severe allergic reaction (swelling, difficulty breathing) or persistent severe diarrhea."
            },
            { 
                name: "Oral Rehydration Salts (ORS)", 
                uses: "Prevents and treats dehydration due to diarrhea or vomiting.", 
                doseInfo: "Dissolve one packet in the specified amount of clean water. Give small sips frequently.", 
                safetyNotes: "Always use clean water. If vomiting occurs, wait 10 minutes and continue slowly.", 
                warnings: "Worsening lethargy, high fever, or blood in stools."
            },
            { 
                name: "Cetirizine", 
                uses: "Relief of allergy symptoms (hay fever, hives, itching).", 
                doseInfo: "Once daily, liquid or tablet form. Dose depends on age/weight. Follow doctor's specific instructions.", 
                safetyNotes: "May cause drowsiness or dry mouth. Avoid other sedatives.", 
                warnings: "Extreme drowsiness, confusion, or difficulty urinating."
            },
            { 
                name: "Azithromycin", 
                uses: "Respiratory infections", 
                doseInfo: "Once daily for 3-5 days.", 
                safetyNotes: "Take after food.", 
                warnings: "Irregular heartbeat."
            },
            { 
                name: "Loratadine", 
                uses: "Allergy symptoms", 
                doseInfo: "Once daily.", 
                safetyNotes: "Less drowsy than cetirizine.", 
                warnings: "Fast heartbeat."
            },
            { 
                name: "Metformin", 
                uses: "Diabetes control", 
                doseInfo: "With meals, once/twice daily.", 
                safetyNotes: "Avoid alcohol.", 
                warnings: "Weakness, breathing issue."
            },
            { 
                name: "Amlodipine", 
                uses: "High blood pressure control", 
                doseInfo: "Once daily.", 
                safetyNotes: "Take regularly.", 
                warnings: "Swelling in legs."
            },
            { 
                name: "Losartan", 
                uses: "High blood pressure control", 
                doseInfo: "Once daily.", 
                safetyNotes: "Monitor BP regularly.", 
                warnings: "Dizziness, fainting."
            },
            {
                name: "Aspirin", 
                uses: "Pain relief, heart protection", 
                doseInfo: "Low dose for heart patients.", 
                safetyNotes: "Not for children.", 
                warnings: "Bleeding, stomach pain."
            },
            { 
                name: "Pantoprazole", 
                uses: "Acidity, ulcers", 
                doseInfo: "Before food once daily.", 
                safetyNotes: "Do not crush tablet.", 
                warnings: "Severe stomach pain."
            },
            { 
                name: "Omeprazole", 
                uses: "Acid reflux", 
                doseInfo: "Before breakfast.", 
                safetyNotes: "Short-term use preferred.", 
                warnings: "Persistent pain."
            },
            { 
                name: "Domperidone", 
                uses: "Nausea, vomiting", 
                doseInfo: "Before meals.", 
                safetyNotes: "Short-term use.", 
                warnings: "Heart rhythm issues."
            },
            { 
                name: "Ondansetron", 
                uses: "Severe vomiting control", 
                doseInfo: "As prescribed.", 
                safetyNotes: "Use when needed.", 
                warnings: "Headache, constipation."
            },
            { 
                name: "Iron Tablets", 
                uses: "Anemia treatment", 
                doseInfo: "Once daily after food.", 
                safetyNotes: "May cause dark stools.", 
                warnings: "Severe constipation."
            },
            { 
                name: "Calcium Tablets", 
                uses: "Bone strength", 
                doseInfo: "After meals.", 
                safetyNotes: "Do not combine with iron.", 
                warnings: "Kidney stones (rare)."
            },
            { 
                name: "Vitamin D Tablets", 
                uses: "Bone health", 
                doseInfo: "Weekly/monthly dose.", 
                safetyNotes: "Avoid overdose.", 
                warnings: "Nausea, weakness."
            },
            { 
                name: "Folic Acid", 
                uses: "Pregnancy support, anemia", 
                doseInfo: "Once daily.", 
                safetyNotes: "Safe in pregnancy.", 
                warnings: "Rare side effects."
            },
            { 
                name: "Levocetirizine", 
                uses: "Allergy relief", 
                doseInfo: "Once daily.", 
                safetyNotes: "May cause drowsiness.", 
                warnings: "Extreme sleepiness."
            },
            { 
                name: "Atorvastatin", 
                uses: "Cholesterol control", 
                doseInfo: "Once daily at night.", 
                safetyNotes: "Avoid fatty food.", 
                warnings: "Muscle pain."
            }
    ];