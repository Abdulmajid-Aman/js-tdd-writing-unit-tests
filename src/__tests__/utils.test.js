// Your tests here
import {pointsForWord} from '../utils'

describe("pointsForWord", () => {
    it("calculates the total numbers of points for a word(1 point for a vowel and 2 points for a consonant)", () => {
        const word = "test";

        const points = pointsForWord(word);
    
        expect(points).toBe(7);
      });

      it("handles uppercase and lowercase input", () => {
        const word = "tEsT";
      
        const points = pointsForWord(word);
      
        expect(points).toBe(7);
      });
})