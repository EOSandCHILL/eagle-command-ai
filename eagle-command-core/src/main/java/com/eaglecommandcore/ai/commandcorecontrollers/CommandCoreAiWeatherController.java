package com.eaglecommandcore.ai.commandcorecontrollers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.eaglecommandcore.ai.commandcoreservices.CommandCoreWeatherReportService;

/**
 * Controller providing AI-generated weather reports for military operations
 * based on operational parameters including location, mission type, duration,
 * start time, altitude level, terrain type, mobility type, and gear load.
 */
@RestController
public class CommandCoreAiWeatherController {

    private final CommandCoreWeatherReportService commandCoreAiWeatherService;

    public CommandCoreAiWeatherController(CommandCoreWeatherReportService commandCoreAiWeatherService) {
        this.commandCoreAiWeatherService = commandCoreAiWeatherService;
    }

    /**
     * REST endpoint simulating operational environment briefings,
     * generating tailored weather reports to assist mission planning and execution.
     * Accepts operational parameters: location, missionType, duration, startTime,
     * altitudeLevel, terrainType, mobilityType, and gearLoad.
     */
    @GetMapping("command-core-ai-weather-report")
    public String generateWeatherReport(@RequestParam String location,
                                        @RequestParam String missionType,
                                        @RequestParam(defaultValue = "short") String duration,
                                        @RequestParam String startTime,
                                        @RequestParam String altitudeLevel,
                                        @RequestParam String terrainType,
                                        @RequestParam String mobilityType,
                                        @RequestParam String gearLoad) {

        return commandCoreAiWeatherService.generateWeatherReport(
                location, missionType, duration, startTime, altitudeLevel, terrainType, mobilityType, gearLoad
        );
    }
}