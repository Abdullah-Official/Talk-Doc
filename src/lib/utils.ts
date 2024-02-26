import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function convertToAscii(inputString: string) {
  // remove non ascii characters
  const asciiString = inputString.replace(/[^\x00-\x7F]+/g, "");
  return asciiString;
}

// export function convertToAscii(inputString: string) {
//   // Replace non-ASCII characters and disallowed characters with ASCII equivalents
//   const asciiString = inputString.replace(/[^\x00-\x7F\[\](){}<>\s0-9]/g, (char) => {
//     // Replace non-ASCII characters with their ASCII equivalents if possible,
//     // otherwise remove them
//     const asciiEquivalent = char.charCodeAt(0) <= 255 ? char : '';
//     return asciiEquivalent;
//   });
//   console.log(asciiString)
//   return asciiString;
// }



