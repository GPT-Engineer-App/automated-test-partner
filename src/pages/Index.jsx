import { useState } from 'react';
import { Button } from "@/components/ui/button";

const Index = () => {
  const [showFact, setShowFact] = useState(false);

  const catFacts = [
    "Cats sleep for about 70% of their lives.",
    "A group of cats is called a clowder.",
    "Cats have over 20 vocalizations, including the purr, meow, and hiss.",
    "The first cat in space was a French cat named Felicette in 1963.",
    "Cats can jump up to six times their length."
  ];

  const randomFact = catFacts[Math.floor(Math.random() * catFacts.length)];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-600">All About Cats</h1>
        
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg" 
          alt="A cute cat" 
          className="mx-auto object-cover w-full h-[400px] rounded-lg mb-6"
        />
        
        <div className="space-y-4">
          <p className="text-lg">
            Cats are fascinating creatures that have been domesticated for thousands of years. 
            Known for their independence, agility, and playful nature, cats make wonderful companions 
            for millions of people around the world.
          </p>
          
          <p className="text-lg">
            These graceful animals come in a variety of breeds, each with its own unique characteristics. 
            From the hairless Sphynx to the fluffy Maine Coon, there's a cat breed to suit every preference.
          </p>
          
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Did You Know?</h2>
            <Button 
              onClick={() => setShowFact(!showFact)}
              className="bg-blue-500 hover:bg-blue-600 text-white"
            >
              {showFact ? "Hide Fact" : "Show a Cat Fact"}
            </Button>
            {showFact && (
              <p className="mt-4 p-4 bg-blue-100 rounded-lg">{randomFact}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
