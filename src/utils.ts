import { GlossaryItem } from "./glossary";

export const getRandomInt = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const getUniqRandomInt = (
  min: number,
  max: number,
  currentQuestionIdx: number
): number[] => {
  const arr = [currentQuestionIdx];
  while (arr.length < 4) {
    console.log(min, "min");
    const randomInt = getRandomInt(min, max);
    if (!arr.includes(randomInt)) {
      arr.push(randomInt);
    }

    //arr.push(1);
  }
  return arr;
};

export const toShuffled = (array: GlossaryItem[]): GlossaryItem[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const toShuffledArray = (array: any[]): any[] => {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
};

export const getAnswers = (
  min: number,
  max: number,
  currentQuestionIdx: number
) => {
  const answers: number[] = getUniqRandomInt(min, max, currentQuestionIdx);
  return toShuffledArray(answers);
};
