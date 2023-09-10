package com.example.demo.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Employees;
import com.example.demo.repository.EmployeeRepository;


@RestController
@RequestMapping("/")
public class Controller {
 
	@Autowired
	EmployeeRepository employeeRepository;
	
	@GetMapping
	public String Welcome() {
		return "welcome to my Page";
	}
	
	
	
	@PostMapping("/addemp")
	public Employees saveEmp(@RequestBody Employees employee){
		return employeeRepository.save(employee);
		
		
		
	}
	
	@PutMapping("/updateemp")
	public Employees updateEmp(@RequestBody Employees employee){
		return employeeRepository.save(employee);
		
		
		
	}
	
	
	
	
	@GetMapping("/getallemp")
	public List<Employees> getAllEmp() {
		return employeeRepository.findAll();
	}
	
	
	
	@DeleteMapping("/delete")
	public String deleteEmp(@RequestParam Integer empId) {
	   employeeRepository.deleteById(empId);
	   return "Deleted Successfully";
	}	
	
	@GetMapping("/getoneemp")
	public Employees getOneEmp(@RequestParam Integer empId) {
		return employeeRepository.findById(empId).get();
	}
	
	
	
	
	
}
