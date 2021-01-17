package hello.hellospring.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class helloController {
    @GetMapping("hello")
    public String hello(Model model){
        model.addAttribute("data", "hello 이것은 컨트롤러입니다!");
        return "hello";
    }
}
