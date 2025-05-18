package com.eaglecommandcore.ai.commandcorecontrollers;

// This controller simulates command-center level AI interactions via REST API endpoints
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eaglecommandcore.ai.commandcoreservices.CommandCoreAiTransmissionService;

@RestController
public class CommandCoreAiTransmissionController {

    // Injected service that handles AI-powered decision support and tactical response generation
    CommandCoreAiTransmissionService commandCoreAiTransmissionService;

    // Constructor-based dependency injection for the command AI communication service
    public CommandCoreAiTransmissionController(CommandCoreAiTransmissionService commandCoreAiService) {
        // Assigning the injected command AI service to the controller's field
        this.commandCoreAiTransmissionService = commandCoreAiService;
    }

    // REST endpoint to simulate a command-level AI query, receiving a prompt and returning the tactical response
    @GetMapping("command-core-transmission")
    public String getResponse(@RequestParam String prompt) {
        // Delegates the prompt to the command AI service and returns the operational response
        return commandCoreAiTransmissionService.getResponse(prompt);
    }

    // Exposes an endpoint for command AI requests that incorporate custom operational parameters
    @GetMapping("command-core-transmission-options")
    // Accepts a `prompt` query parameter and returns the AI's response generated with mission-specific options
    public String getResponseOptions(@RequestParam String prompt) {
        // Delegate the prompt to the command AI service with custom tactical options applied
        return commandCoreAiTransmissionService.getResponseOptions(prompt);
    }
}