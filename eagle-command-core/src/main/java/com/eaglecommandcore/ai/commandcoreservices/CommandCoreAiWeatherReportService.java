package com.eaglecommandcore.ai.commandcoreservices;

import java.util.Map;

import org.springframework.ai.chat.model.ChatModel;
import org.springframework.ai.chat.prompt.Prompt;
import org.springframework.ai.chat.prompt.PromptTemplate;
import org.springframework.stereotype.Service;

@Service
public class CommandCoreAiWeatherReportService {
    // This service simulates an AI-powered weather report generation to assist troops in operational planning
    private final ChatModel chatModel;

    // Constructor injection to provide the ChatModel dependency for tactical support
    public CommandCoreAiWeatherReportService(ChatModel chatModel) {
        // Assigning the injected ChatModel to the service's field for mission-critical operations
        this.chatModel = chatModel;
    }

    public String generateCommandCoreAiWeatherReport(String location, String missionType, String duration,
                                        String startTime, String altitudeLevel, String terrainType,
                                        String mobilityType, String gearLoad) {
        var template = """
                Generate a weather report for a military operation located in {location}.
                The mission type is {missionType}, and it will begin at {startTime} and last for approximately {duration}.
                The operation is planned in {terrainType} terrain at {altitudeLevel} altitude.
                Troops will be moving via {mobilityType} with {gearLoad} equipment.
                Provide a detailed report including temperature, precipitation, wind conditions, visibility, and any environmental hazards that could impact mission success.
                """;

        PromptTemplate promptTemplate = new PromptTemplate(template);
        Map<String, Object> params = Map.of(
                "location", location,
                "missionType", missionType,
                "duration", duration,
                "startTime", startTime,
                "altitudeLevel", altitudeLevel,
                "terrainType", terrainType,
                "mobilityType", mobilityType,
                "gearLoad", gearLoad
        );

        Prompt prompt = promptTemplate.create(params);
        return chatModel.call(prompt).getResult().getOutput().getText().trim();
    }
}