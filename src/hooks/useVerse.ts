
import { useState, useEffect } from 'react';

// This is a simple array of verses for demonstration
const verses = [
  {
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    translation: "You have the right to work only but never to its fruits.\nLet not the fruits of action be your motive, nor let your attachment be to inaction.",
    interpretation: "This verse teaches us about selfless action. It encourages us to perform our duties without being attached to the results, focusing on the present moment and our responsibilities rather than potential rewards."
  },
  {
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    translation: "Perform your duties established in yoga, abandoning attachment, and be equal in success and failure. This equanimity is called yoga.",
    interpretation: "This verse emphasizes the importance of maintaining emotional balance regardless of outcomes. True yoga is the state of mental equilibrium where success and failure are viewed with the same peaceful mindset."
  },
  {
    sanskrit: "श्री भगवानुवाच |\nअशोच्यानन्वशोचस्त्वं प्रज्ञावादांश्च भाषसे |\nगतासूनगतासूंश्च नानुशोचन्ति पण्डिताः ॥",
    translation: "The Blessed Lord said: While speaking learned words, you are mourning for what is not worthy of grief. Those who are wise lament neither for the living nor for the dead.",
    interpretation: "This profound teaching reminds us that the eternal soul is beyond birth and death. The wise understand this truth and therefore do not grieve, knowing that our true nature is eternal and unchanging."
  }
];

export const useVerse = () => {
  const [verse, setVerse] = useState(verses[0]);
  const [loading, setLoading] = useState(true);

  const getRandomVerse = () => {
    const randomIndex = Math.floor(Math.random() * verses.length);
    return verses[randomIndex];
  };

  const refreshVerse = async () => {
    setLoading(true);
    // Simulate API call with setTimeout
    await new Promise(resolve => setTimeout(resolve, 500));
    setVerse(getRandomVerse());
    setLoading(false);
  };

  useEffect(() => {
    refreshVerse();
  }, []);

  return { verse, loading, refreshVerse };
};
