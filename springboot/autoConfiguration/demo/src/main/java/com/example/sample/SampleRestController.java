package com.example.sample;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SampleRestController {

    @GetMapping("/test")
    public String test() {
        return "test page";
    }
}
