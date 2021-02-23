package com.ensak.controller;

	
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.ensak.repository.FileInterface;
@RestController
@RequestMapping("/api/files")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilesController {

	  @Autowired
	  FileInterface fileInterface;

  @PostMapping("/upload")
  public Map<String, Object> uploadFile( @RequestParam("file") MultipartFile file) {
	  String pathString = "";
	  try {
		  pathString = fileInterface.save(file);
	} catch (Exception e) {
		// TODO: handle exception
	}
    
  	Map<String, Object> responseMap = new HashMap<>();
	responseMap.put("path", pathString);
	responseMap.put("status", 200);
	responseMap.put("message", "Success");
    return responseMap;
   
  }
	
	  @GetMapping("/file/{filename:.+}")
	  public ResponseEntity<Resource> getFile(@PathVariable String filename) {
	    Resource file = fileInterface.load(filename);
	    return ResponseEntity.ok()
	        .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"").body(file);
	  }
	  
}
