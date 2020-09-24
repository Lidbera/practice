package me.whiteship;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("holoman")
public class HolomanProperties {
    private String name;
    private int howLong;

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getHowLong() {
        return this.howLong;
    }

    public void setHowLong(int howLong) {
        this.howLong = howLong;
    }
}
