// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'

export const cg: Topic = {
  topic: 'Chhattisgarh',
  level: 'Advanced',
  totalQuestions: 20,
  totalScore: 100,
  totalTime: 60,
  questions: [
    {
      question:
        'स्थापना के आधार पर छत्तीसगढ़ का भारत के राज्यों में क्रम है?',
      choices: [
        '25 वाँ ',
        '26 वाँ',
        '27 वाँ',
        '28 वाँ',
      ],
      type: 'MAQs',
      correctAnswers: [
        '26 वाँ',
      ],
      score: 5,
    },
{
question: 'प्रधानमंत्री आवास योजना- (शहरी) का मुख्य उद्देश्य क्या है?',
choices: ['ग्रामीण क्षेत्रों में घर बनाना', 'सभी शहरी गरीबों के लिए आवास प्रदान करना', 'उच्च आय वर्ग के लिए आवास निर्माण', 'उद्योगों को बढ़ावा देना'],
type: 'MCQ',
correctAnswers: ['सभी शहरी गरीबों के लिए आवास प्रदान करना'],
score: 5,
},

{
question: 'प्रधानमंत्री आवास योजना के तहत कितने गैर-झुग्गी-झोपड़ी शहरी गरीब परिवारों को कवर करने का प्रस्ताव है?',
choices: ['10 लाख', '15 लाख', '20 लाख', '25 लाख'],
type: 'MCQ',
correctAnswers: ['20 लाख'],
score: 5,
},

{
question: 'प्रधानमंत्री आवास योजना के तहत कितने मिलियन घरों की कमी को संबोधित करने का लक्ष्य है?',
choices: ['10 मिलियन', '15 मिलियन', '20 मिलियन', '25 मिलियन'],
type: 'MCQ',
correctAnswers: ['20 मिलियन'],
score: 5,
},

{
question: 'प्रधानमंत्री आवास योजना के तहत लाभार्थियों को किस प्रकार की सहायता प्रदान की जाती है?',
choices: ['रोजगार प्रशिक्षण', 'शिक्षा सब्सिडी', 'व्यक्तिगत घर निर्माण/वृद्धि के लिए सब्सिडी', 'स्वास्थ्य सेवाएँ'],
type: 'MCQ',
correctAnswers: ['व्यक्तिगत घर निर्माण/वृद्धि के लिए सब्सिडी'],
score: 5,
},

    
    {
    question: 'नियद नेल्लानार योजना का अर्थ क्या है?',
    choices: ['आपके अच्छे दिन', 'आपका अच्छा गांव', 'आपके अच्छे लोग', 'आपके अच्छे कार्य'],
    type: 'MAQs',
    correctAnswers: ['आपका अच्छा गांव'],
    score: 5,
},
{
    question: 'नियद नेल्लानार योजना का नाम किस स्थानीय भाषा से लिया गया है?',
    choices: ['हल्बी', 'गोंडी', 'दंडामी', 'कोरकू'],
    type: 'MAQs',
    correctAnswers: ['दंडामी'],
    score: 5,
},
{
    question: 'नियद नेल्लानार योजना का उद्देश्य क्या है?',
    choices: ['शिक्षा को बढ़ावा देना', 'नक्सल प्रभावित गांवों में सुविधाएँ और लाभ प्रदान करना', 'किसानों को सहायता देना', 'युवाओं के लिए रोजगार प्रदान करना'],
    type: 'MAQs',
    correctAnswers: ['नक्सल प्रभावित गांवों में सुविधाएँ और लाभ प्रदान करना'],
    score: 5,
},
{
    question: 'महतारी वंदन योजना का मुख्य उद्देश्य क्या है?',
    choices: ['महिलाओं को शिक्षित करना','महिलाओं को आर्थिक रूप से स्वावलंबी बनाना और उनके स्वास्थ्य एवं पोषण स्तर में सुधार करना', 'पुरुषों को आर्थिक सहायता देना', 'बच्चों की शिक्षा में सुधार करना'],
    type: 'MAQs',
    correctAnswers: ['महिलाओं को आर्थिक रूप से स्वावलंबी बनाना और उनके स्वास्थ्य एवं पोषण स्तर में सुधार करना'],
    score: 5,
},
{
    question: 'महतारी वंदन योजना के अंतर्गत पात्र महिलाओं को प्रति माह कितनी वित्तीय सहायता प्रदान की जाएगी?',
    choices: ['500 रुपये', '1000 रुपये', '1500 रुपये', '2000 रुपये'],
    type: 'MAQs',
    correctAnswers: ['1000 रुपये'],
    score: 5,
},
{
    question: 'महतारी वंदन योजना के तहत किस प्रकार की महिलाओं को सहायता प्रदान की जाएगी?',
    choices: ['सभी महिलाओं को', 'अविवाहित महिलाओं को', 'केवल गर्भवती महिलाओं को', 'पात्र विवाहित महिलाओं को'],
    type: 'MAQs',
    correctAnswers: ['पात्र विवाहित महिलाओं को'],
    score: 5,
},
{
    question: 'रामलला दर्शन योजना के तहत यात्रा करने के लिए पात्र लोगों की आयु सीमा क्या है?',
    choices: ['18 वर्ष से 60 वर्ष', '21 वर्ष से 70 वर्ष', '18 वर्ष से 75 वर्ष', '25 वर्ष से 80 वर्ष'],
    type: 'MAQs',
    correctAnswers: ['18 वर्ष से 75 वर्ष'],
    score: 5,
},
{
    question: 'रामलला दर्शन योजना के तहत यात्रा किस राज्य के किस धार्मिक स्थान के लिए करवाई जाएगी?',
    choices: ['उत्तर प्रदेश, काशी', 'उत्तर प्रदेश, अयोध्या धाम', 'राजस्थान, पुष्कर', 'मध्य प्रदेश, उज्जैन'],
    type: 'MAQs',
    correctAnswers: ['उत्तर प्रदेश, अयोध्या धाम'],
    score: 5,
},
{
    question: 'रामलला दर्शन योजना के तहत छत्तीसगढ़ के निवासियों को श्रीरामलला के दर्शन हेतु यात्रा में कितनी बार सहायता दी जाएगी?',
    choices: ['हर वर्ष', 'जीवनकाल में एक बार', 'हर पांच वर्षों में एक बार', 'दस वर्षों में एक बार'],
    type: 'MAQs',
    correctAnswers: ['जीवनकाल में एक बार'],
    score: 5,
},


    {
      question: 'छत्तीसगढ़ में सबसे अधिक अवधि तक किसने शासन किया? ',
      choices: ['कलचुरियों ने', 'अंग्रेजों ने ', 'मराठों ने ','इनमे से कोई नहीं',],
      type: 'MAQs',
      correctAnswers: [
        'कलचुरियों ने',
    ],
      score: 5,
    },
    {
        question: 'छत्तीसगढ़ सरकार के राज्य प्रतीक चिह्न में किस फसल की बालियाँ हैं? ',
        choices: ['गेहूँ', 'ज्वार', 'बाजरा','धान',],
        type: 'MAQs',
        correctAnswers: [
          'धान',
      ],
        score: 5,
      },
      {
        question: 'प्राचीनकाल में छत्तीसगढ़ को किस नाम से जाना जाता था? ',
        choices: ['उत्तर कोशल', 'दक्षिण पांचाल', 'उत्तर पांचाल','दक्षिण कोशल',],
        type: 'MAQs',
        correctAnswers: [
          'दक्षिण कोशल',
      ],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ राज्य के प्रथम राज्यपाल कौन थे? ',
        choices: ['प्रभात कुमार', 'दिनेश नंदन सहाय', 'सी रंगराजन','भाई महावीर',],
        type: 'MAQs',
        correctAnswers: [
          'दिनेश नंदन सहाय',
      ],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ की सीमा का अधिकांश भाग किस राज्य की सीमा से लगा हुआ है? ',
        choices: ['आंध्र प्रदेश', 'ओडिशा', 'महाराष्ट्र','मध्यप्रदेश',],
        type: 'MAQs',
        correctAnswers: [
          'ओडिशा',
      ],
        score: 5,
      },
      {
        question: 'वन क्षेत्रफल की दृष्टि से छत्तीसगढ़ राज्य का भारतीय राज्यों में कौन सा स्थान है? ',
        choices: ['तीसरा', 'आंठवाँ', 'पाँचवाँ','सातवां',],
        type: 'MAQs',
        correctAnswers: [
          'तीसरा',
      ],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ राज्य का गठन कब हुआ था?',
        choices: ['1 जनवरी 2000', '15 अगस्त 2000', '1 नवंबर 2000', '26 जनवरी 2000'],
        type: 'MCQs',
        correctAnswers: ['1 नवंबर 2000'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ का राजकीय पशु कौन सा है?',
        choices: ['बाघ', 'जंगली भालू', 'वन भैंसा', 'नीलगाय'],
        type: 'MCQs',
        correctAnswers: ['वन भैंसा'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ का राजकीय पक्षी कौन सा है?',
        choices: ['बुलबुल', 'मयूर', 'बस्तर मैना', 'तोता'],
        type: 'MCQs',
        correctAnswers: ['बस्तर मैना'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ की राजधानी कौन सी है?',
        choices: ['रायपुर', 'बिलासपुर', 'दुर्ग', 'कोरबा'],
        type: 'MCQs',
        correctAnswers: ['रायपुर'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ का सबसे बड़ा जिला क्षेत्रफल के अनुसार कौन सा है?',
        choices: ['बस्तर', 'बिलासपुर', 'दंतेवाड़ा', 'सरगुजा'],
        type: 'MCQs',
        correctAnswers: ['सरगुजा'],
        score: 5,
      },{
        question: 'छत्तीसगढ़ की प्रमुख नदी कौन सी है?',
        choices: ['नर्मदा', 'महानदी', 'गोदावरी', 'कावेरी'],
        type: 'MCQs',
        correctAnswers: ['महानदी'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ का कौन सा त्यौहार "नई फसल का त्यौहार" कहलाता है?',
        choices: ['होली', 'तीजा', 'छेरछेरा', 'हरेली'],
        type: 'MCQs',
        correctAnswers: ['हरेली'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ में स्थित "चित्रकोट जलप्रपात" को किस नाम से जाना जाता है?',
        choices: ['भारत का नियाग्रा', 'भारत का टाइगर', 'भारत का सनसेट', 'भारत का झरना'],
        type: 'MCQs',
        correctAnswers: ['भारत का नियाग्रा'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ का प्रसिद्ध "बेल मेटल" शिल्प किस जनजाति के लोग बनाते हैं?',
        choices: ['मुरिया', 'गोंड', 'बैगा', 'भतरा'],
        type: 'MCQs',
        correctAnswers: ['मुरिया'],
        score: 5,
      },{
        question: 'छत्तीसगढ़ में "सिहावा" पहाड़ियाँ किस जिले में स्थित हैं?',
        choices: ['बस्तर', 'धमतरी', 'बिलासपुर', 'रायपुर'],
        type: 'MCQs',
        correctAnswers: ['धमतरी'],
        score: 5,
      },{
        question: 'छत्तीसगढ़ का राजकीय वृक्ष कौन सा है?',
        choices: ['सागौन', 'साल', 'आम', 'महुआ'],
        type: 'MCQs',
        correctAnswers: ['साल'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ के किस जिले को "चावल का कटोरा" कहा जाता है?',
        choices: ['सरगुजा', 'धमतरी', 'दुर्ग', 'रायगढ़'],
        type: 'MCQs',
        correctAnswers: ['धमतरी'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ के किस मंदिर को "पूर्व का खजुराहो" कहा जाता है?',
        choices: ['भोरमदेव', 'माँ बमलेश्वरी', 'महादेव', 'काली'],
        type: 'MCQs',
        correctAnswers: ['भोरमदेव'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ में "राउत नाचा" किस जनजाति का लोक नृत्य है?',
        choices: ['गोंड', 'राउत', 'बैगा', 'मुरिया'],
        type: 'MCQs',
        correctAnswers: ['राउत'],
        score: 5,
      },
      {
        question: '"बस्तर दशहरा" का आयोजन कितने दिनों तक चलता है?',
        choices: ['10 दिन', '15 दिन', '30 दिन', '75 दिन'],
        type: 'MCQs',
        correctAnswers: ['75 दिन'],
        score: 5,
      },
      {
        question: '"सिरपुर" का पुरातात्विक स्थल किस नदी के किनारे स्थित है?',
        choices: ['महानदी', 'इंद्रावती', 'शिवनाथ', 'हसदेव'],
        type: 'MCQs',
        correctAnswers: ['महानदी'],
        score: 5,
      },
      {
        question: 'छत्तीसगढ़ में कौन सी जनजाति सबसे अधिक संख्या में है?',
        choices: ['गोंड', 'बैगा', 'कोरकू', 'मुरिया'],
        type: 'MCQs',
        correctAnswers: ['गोंड'],
        score: 5,
      },
      {
        question: '"गंगा मैया मंदिर" छत्तीसगढ़ के किस जिले में स्थित है?',
        choices: ['दुर्ग', 'रायपुर', 'बिलासपुर', 'कोरबा'],
        type: 'MCQs',
        correctAnswers: ['दुर्ग'],
        score: 5,
      },
      {
        question: '"चिल्फी घाटी" छत्तीसगढ़ के किस जिले में स्थित है?',
        choices: ['कांकेर', 'बस्तर', 'कबीरधाम', 'राजनांदगांव'],
        type: 'MCQs',
        correctAnswers: ['कबीरधाम'],
        score: 5,
      },
    
  ],
}
