'use server';

/**
 * @fileOverview A campaign idea generation AI agent.
 *
 * - suggestCampaignIdeas - A function that suggests campaign ideas based on brand DNA and current trends.
 * - SuggestCampaignIdeasInput - The input type for the suggestCampaignIdeas function.
 * - SuggestCampaignIdeasOutput - The return type for the suggestCampaignIdeas function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SuggestCampaignIdeasInputSchema = z.object({
  brandDNA: z
    .string()
    .describe('A description of the brand, its values, and target audience.'),
  currentTrends: z
    .string()
    .describe('A description of current marketing and social media trends.'),
});
export type SuggestCampaignIdeasInput = z.infer<typeof SuggestCampaignIdeasInputSchema>;

const SuggestCampaignIdeasOutputSchema = z.object({
  campaignIdeas: z
    .array(z.string())
    .describe('A list of campaign ideas based on the brand DNA and current trends.'),
});
export type SuggestCampaignIdeasOutput = z.infer<typeof SuggestCampaignIdeasOutputSchema>;

export async function suggestCampaignIdeas(input: SuggestCampaignIdeasInput): Promise<SuggestCampaignIdeasOutput> {
  return suggestCampaignIdeasFlow(input);
}

const prompt = ai.definePrompt({
  name: 'suggestCampaignIdeasPrompt',
  input: {schema: SuggestCampaignIdeasInputSchema},
  output: {schema: SuggestCampaignIdeasOutputSchema},
  prompt: `You are a marketing expert, skilled at generating innovative campaign ideas.

  Based on the following brand DNA:
  {{brandDNA}}

  And current marketing trends:
  {{currentTrends}}

  Suggest a list of campaign ideas that would resonate with the brand's target audience and capitalize on current trends. Return these as a numbered list.
  Campaign Ideas:
  `,
});

const suggestCampaignIdeasFlow = ai.defineFlow(
  {
    name: 'suggestCampaignIdeasFlow',
    inputSchema: SuggestCampaignIdeasInputSchema,
    outputSchema: SuggestCampaignIdeasOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
