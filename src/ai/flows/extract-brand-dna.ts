'use server';

/**
 * @fileOverview This flow extracts brand DNA from various sources.
 *
 * The brand DNA includes color palette, typography, tone of voice, messaging patterns,
 * visual style, and target personas.
 *
 * @interface ExtractBrandDNAInput - Defines the input for the brand DNA extraction flow.
 * @interface ExtractBrandDNAOutput - Defines the output of the brand DNA extraction flow.
 * @function extractBrandDNA - The main function to trigger the brand DNA extraction flow.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ExtractBrandDNAInputSchema = z.object({
  websiteURL: z.string().describe('The URL of the brand website.'),
  socialProfiles: z.array(z.string()).describe('URLs of the brand social media profiles.'),
  customerReviews: z.string().describe('Text containing customer reviews of the brand.'),
  competitorURLs: z.array(z.string()).describe('URLs of competitor websites.'),
});
export type ExtractBrandDNAInput = z.infer<typeof ExtractBrandDNAInputSchema>;

const ExtractBrandDNAOutputSchema = z.object({
  colorPalette: z.array(z.string()).describe('The brand color palette.'),
  typography: z.object({
    headings: z.string().describe('Font for headings.'),
    body: z.string().describe('Font for body text.'),
  }).describe('The brand typography.'),
  toneOfVoice: z.string().describe('The brand tone of voice.'),
  messagingPatterns: z.array(z.string()).describe('Typical messaging patterns of the brand.'),
  visualStyle: z.string().describe('The brand visual style.'),
  targetPersonas: z.array(z.string()).describe('The brand target personas.'),
});
export type ExtractBrandDNAOutput = z.infer<typeof ExtractBrandDNAOutputSchema>;


const extractBrandDNAPrompt = ai.definePrompt({
  name: 'extractBrandDNAPrompt',
  input: {schema: ExtractBrandDNAInputSchema},
  output: {schema: ExtractBrandDNAOutputSchema},
  prompt: `You are an AI-powered brand analyst. Your task is to analyze the provided
  information and extract the brand DNA.

  Analyze the following information to extract the brand DNA:

  Website URL: {{{websiteURL}}}
  Social Profiles: {{#each socialProfiles}}{{{this}}} {{/each}}
  Customer Reviews: {{{customerReviews}}}
  Competitor URLs: {{#each competitorURLs}}{{{this}}} {{/each}}

  Based on this information, extract the following brand DNA elements:

  - Color Palette: List the main brand colors.  Be specific, and include hex codes
  - Typography: Identify the fonts used for headings and body text.
  - Tone of Voice: Describe the brand's tone of voice (e.g., formal, informal, friendly, professional).
  - Messaging Patterns: List common messaging patterns or themes used by the brand.
  - Visual Style: Describe the brand's visual style (e.g., minimalist, modern, playful).
  - Target Personas: Identify the brand's target personas.

  Return the extracted brand DNA in JSON format.
`,
});

const extractBrandDNAFlow = ai.defineFlow(
  {
    name: 'extractBrandDNAFlow',
    inputSchema: ExtractBrandDNAInputSchema,
    outputSchema: ExtractBrandDNAOutputSchema,
  },
  async input => {
    const {output} = await extractBrandDNAPrompt(input);
    return output!;
  }
);

export async function extractBrandDNA(input: ExtractBrandDNAInput): Promise<ExtractBrandDNAOutput> {
  return extractBrandDNAFlow(input);
}
