package com.example.demoWithH2.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demoWithH2.model.Employee;
import com.example.demoWithH2.services.EmployeeService;

@RestController
@RequestMapping("/emp")
public class EmployeeController {
	
	
	
	@Autowired
	private EmployeeService empService;
	
	
	@PostMapping
	public Employee saveEmployee(@RequestBody Employee emp) {
		
		Employee dbEmp =empService.addEmployee(emp);
		return dbEmp;
		
		
		
		
		
		
		
	}
	
	
	

}
