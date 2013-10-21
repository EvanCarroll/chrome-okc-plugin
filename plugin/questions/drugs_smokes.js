//question search words: smoke, smokes, cigarette, cigarettes, cigar, cigars, tobacco, marijuana, weed, pot, drug, drugs
fileQuestions.drugs_smokes =
	[
		//non_smoker
		{
			"qid":"501",
			"text":"Have you smoked a cigarette in the last 6 months?",
			"category": "non_smoker",
			"answerText": ["Yes", "No"],
			"score": [-1, 1]
		},
		{
			"qid":"13006",
			"text":"Would you go out with a smoker?",
			"category": "non_smoker",
			"answerText": ["Yes", "Yes, but only an occasional/social smoker","No"],
			"score": [-0.5, 0, 1],
			"weight": [0.7, 0.2, 1]
		},
		{
			"qid":"80621",
			"text":"How often do you smoke cigars?",
			"category": "non_smoker",
			"answerText": ["Frequently.", "Occasionally.", "Never."],
			"score": [-1, -1, 1]
		},

		//smoker
		{
			"qid":"501",
			"text":"Have you smoked a cigarette in the last 6 months?",
			"category": "smoker",
			"answerText": ["Yes", "No"],
			"score": [1, -1]
		},
		{
			"qid":"13006",
			"text":"Would you go out with a smoker?",
			"category": "smoker",
			"answerText": ["Yes", "Yes, but only an occasional/social smoker","No"],
			"score": [1, 1, -1],
			"weight": [0.7, 0.5, 1]
		},
		{
			"qid":"80621",
			"text":"How often do you smoke cigars?",
			"category": "smoker",
			"answerText": ["Frequently.", "Occasionally.", "Never."],
			"score": [1, 1, -1]
		},

		//not_420_friendly
		{
			"qid":"79",
			"text":"What's your relationship with marijuana?",
			"category": "not_420_friendly",
			"answerText": ["I smoke regularly.", "I smoke occasionally.", "I smoked in the past, but no longer.", "Never."],
			"score": [-1, -0.8, 1, 1]
		},
		{
			"qid":"62254",
			"text":"If it were legal to do so where you live, would you smoke marijuana?",
			"category": "not_420_friendly",
			"answerText": ["Yes.", "No."],
			"score": [-1, 1]
		},
		
		//420_friendly
		{
			"qid":"79",
			"text":"What's your relationship with marijuana?",
			"category": "420_friendly",
			"answerText": ["I smoke regularly.", "I smoke occasionally.", "I smoked in the past, but no longer.", "Never."],
			"score": [1, 1, -0.5, -1]
		},
		{
			"qid":"62254",
			"text":"If it were legal to do so where you live, would you smoke marijuana?",
			"category": "420_friendly",
			"answerText": ["Yes.", "No."],
			"score": [1, -1]
		},

		//no_alcohol
		{
			"qid":"23954",
			"text":"Do you ever feel the need to get really drunk?",
			"category": "no_alcohol",
			"answerText": ["Often", "Sometimes", "Rarely", "Never"],
			"score": [-1, -0.8, 0, 1]
		},
		{
			"qid":"8155",
			"text":"On average, which best describes how often you GET WICKED DRUNK?",
			"category": "no_alcohol",
			"answerText": ["Twice a week or more", "Weekly / Bi-Weekly", "Once every month or three.", "Seldom or never."],
			"score": [-1, -0.8, 0.1, 1]
		},
		{
			"qid":"77",
			"text":"How frequently do you drink alcohol?",
			"category": "no_alcohol",
			"answerText": ["Very often", "Sometimes", "Rarely", "Never"],
			"score": [-1, -1, 0.3, 1]
		},
		{
			"qid":"84023",
			"text":"Could you live the rest of your life without drinking alcohol?",
			"category": "no_alcohol",
			"answerText": ["Yes.", "No."],
			"score": [1, -1]
		},

		//alcohol
		{
			"qid":"23954",
			"text":"Do you ever feel the need to get really drunk?",
			"category": "alcohol",
			"answerText": ["Often", "Sometimes", "Rarely", "Never"],
			"score": [1, 0.8, 0, -1]
		},
		{
			"qid":"8155",
			"text":"On average, which best describes how often you GET WICKED DRUNK?",
			"category": "alcohol",
			"answerText": ["Twice a week or more", "Weekly / Bi-Weekly", "Once every month or three.", "Seldom or never."],
			"score": [1, 0.8, 0.2, -1]
		},
		{
			"qid":"77",
			"text":"How frequently do you drink alcohol?",
			"category": "alcohol",
			"answerText": ["Very often", "Sometimes", "Rarely", "Never"],
			"score": [1, 1, 0, -1]
		},
		{
			"qid":"84023",
			"text":"Could you live the rest of your life without drinking alcohol?",
			"category": "alcohol",
			"answerText": ["Yes.", "No."],
			"score": [-1, 1]
		},

		//no_other_addictions
		{
			"qid":"82566",
			"text":"Do you like coffee?",
			"category": "no_other_addictions",
			"answerText": ["Yes.  I need it to function.", "Yes, but I can do without it.", "No."],
			"score": [-1, 0, 1],
			"weight": [1, 0, 1]
		},
		{
			"qid":"81504",
			"text":"Do you chew tobacco?",
			"category": "no_other_addictions",
			"answerText": ["Yes.", "No."],
			"score": [-1, 1]
		},
		{
			"qid":"38051",
			"text":"How often do you gamble?",
			"category": "no_other_addictions",
			"answerText": ["Often.", "Rarely.", "Never."],
			"score": [-1, 0, 1]
		},

		//coffee
		{
			"qid":"82566",
			"text":"Do you like coffee?",
			"category": "coffee",
			"answerText": ["Yes.  I need it to function.", "Yes, but I can do without it.", "No."],
			"score": [1, 1, -1]
		},

		//no_coffee
		{
			"qid":"82566",
			"text":"Do you like coffee?",
			"category": "no_coffee",
			"answerText": ["Yes.  I need it to function.", "Yes, but I can do without it.", "No."],
			"score": [-1, 0, 1]
		},

		//no_harder_drugs
		{
			"qid":"80",
			"text":"What's your deal with harder drugs (stuff beyond pot)?",
			"category": "no_harder_drugs",
			"answerText": ["I do drugs regularly.", "I do drugs occasionally.", "I've done drugs in the past, but no longer.", "I never do drugs."],
			"score": [-1, -1, 1, 1],
			"weight": [1, 1, 0.5, 1]
		},
		{
			"qid":"9688",
			"text":"Could you date someone who does drugs?",
			"category": "no_harder_drugs",
			"answerText": ["No", "Yes, but only soft stuff like marijuana", "Yes"],
			"score": [1, 1, -1],
			"weight": [1, 1, 0.5]
		},
		// { //it's ambiguous what kinds of drugs this is talking about... skipping it for now
		// 	"qid":"25228",
		// 	"text":"Do you think drug use with your partner can be a romantic activity?",
		// 	"category": "no_harder_drugs",
		// 	"answerText": ["Yes", "No"],
		// 	"score": [-1, 1],
		// 	"weight": [0.5, 0.5]
		// },
		{
			"qid":"15414",
			"text":"Have you used psychedelic drugs (LSD, mescaline, peyote, etc.) or would you like to?",
			"category": "no_harder_drugs",
			"answerText": ["Yes, I have used psychedelic drugs.", "No, I have not used them and I would not try them.", "No, I have not used them but I would try them."],
			"score": [-1, 1, -1]
		},
	];
