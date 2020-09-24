package com.example;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import me.whiteship.Holoman;

@Component
public class HolomanRunner implements ApplicationRunner {

    @Autowired
    Holoman holoman;

    @Override
    public void run(final ApplicationArguments args) throws Exception {
        System.out.println(holoman);
    }

}
