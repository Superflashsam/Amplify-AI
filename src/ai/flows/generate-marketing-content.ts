'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating marketing content tailored to different platforms.
 *
 * The flow takes a description of the product or service, the target platform, and the desired tone of voice as input.
 * It then uses a Genkit prompt to generate marketing content optimized for the specified platform.
 *
 * @interface GenerateMarketingContentInput - Defines the input schema for the generateMarketingContent function.
 * @interface GenerateMarketingContentOutput - Defines the output schema for the generateMarketingContent function.
 * @function generateMarketingContent - An async function that takes the input and returns the generated marketing content.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMarketingContentInputSchema = z.object({
  productDescription: z
    .string()
    .describe('A detailed description of the product or service.'),
  targetPlatform: z
    .string()
    .describe(
      'The target platform for the marketing content (e.g., Facebook, LinkedIn, Twitter).'
    ),
  toneOfVoice: z
    .string()
    .describe(
      'The desired tone of voice for the marketing content (e.g., professional, casual, humorous).'
    ),
});

export type GenerateMarketingContentInput = z.infer<
  typeof GenerateMarketingContentInputSchema
>;

const GenerateMarketingContentOutputSchema = z.object({
  marketingContent: z
    .string()
    .describe('The generated marketing content optimized for the specified platform.'),
});

export type GenerateMarketingContentOutput = z.infer<
  typeof GenerateMarketingContentOutputSchema
>;

export async function generateMarketingContent(
  input: GenerateMarketingContentInput
): Promise<GenerateMarketingContentOutput> {
  return generateMarketingContentFlow(input);
}

const generateMarketingContentPrompt = ai.definePrompt({
  name: 'generateMarketingContentPrompt',
  input: {schema: GenerateMarketingContentInputSchema},
  output: {schema: GenerateMarketingContentOutputSchema},
  prompt: `You are an AI marketing expert specializing in generating engaging content for various platforms.

  Based on the product description, target platform, and tone of voice provided, generate marketing content that is optimized for that platform.

  Product Description: {{{productDescription}}}
  Target Platform: {{{targetPlatform}}}
  Tone of Voice: {{{toneOfVoice}}}

  The generated content should be concise, attention-grabbing, and tailored to the specific platform.
  Consider the platform's audience, content format, and best practices when creating the content.
  `,
});

const generateMarketingContentFlow = ai.defineFlow(
  {
    name: 'generateMarketingContentFlow',
    inputSchema: GenerateMarketingContentInputSchema,
    outputSchema: GenerateMarketingContentOutputSchema,
  },
  async input => {
    const {output} = await generateMarketingContentPrompt(input);
    return output!;
  }
);
