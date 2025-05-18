package com.eaglecommandcore.ai.commandcoreservices;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.model.ChatResponse;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.openai.OpenAiChatOptions;
import org.springframework.stereotype.Service;

// CommandCoreAiTransmissionService acts as the interface to AI-powered decision support systems,
// enabling tactical prompt submission and retrieval of strategic response data
@Service
public class CommandCoreAiTransmissionService {
    // Language model interface for generating intelligence and command responses
    private final ChatModel chatModel;

    // Constructor injection providing the AI chat model for tactical communication
    public CommandCoreAiTransmissionService(ChatModel chatModel) {
        // Initialize the service with the AI model responsible for command-level analysis
        this.chatModel = chatModel;
    }

    // Submit a raw command prompt to the AI system and receive a mission-relevant response
    public String getResponse(String prompt) {
        // Execute prompt through AI to obtain operational guidance or situational insight
        return chatModel.call(prompt);
    }

    // Submit command prompts with operational parameters (model version, response variability)
    // to generate refined tactical intelligence outputs
    public String getResponseOptions(String prompt) {
        // Engage the AI with a structured prompt and customized runtime options for mission-specific output
        ChatResponse response = chatModel.call(
                new Prompt(
                        prompt,
                        // Tactical runtime options:
                        // - select advanced model ("gpt-4o") optimized for command-level reasoning
                        OpenAiChatOptions.builder()
                            .model("gpt-4o")
                            .temperature(0.4) // Moderate randomness for balanced strategic creativity and precision
                            .maxTokens(150) // Limit output length to maintain concise, actionable intelligence
                            .build()
                ));
        // Extract the AI-generated tactical response text for command use
        return response.getResult().getOutput().getText();
    }
}