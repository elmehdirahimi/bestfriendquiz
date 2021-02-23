package com.ensak.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController {

    @RequestMapping(value = {"/"})
    public String home() {
        return "index.html";
    }

    @RequestMapping(value = {"/login"})
    public String login() {
        return "index.html";
    }

      
    @RequestMapping(value = {"/test/{**}"})
    public String test() {
        return "index.html";
    }

    @RequestMapping(value = {"/quiz/{**}"})
    public String quiz() {
        return "index.html";
    }

  @RequestMapping(value = {"/adminquiz/{**}"})
    public String adminquiz() {
        return "index.html";
    }
    
    @RequestMapping(value = {"/languages"})
    public String languages() {
        return "index.html";
    }

    
    @RequestMapping(value = {"/dashboard"})
    public String dashboard() {
        return "index.html";
    }

}
