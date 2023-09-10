package com.example.demoWithH2.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demoWithH2.model.Employee;
import com.example.demoWithH2.repository.EmployeeRespository;

@Service
public class EmployeeService {
  
 @Autowired	
 private EmployeeRespository employeeRespository;	
	
 
 public Employee addEmployee(Employee emp) {
	 return employeeRespository.save(emp);
 }
 
 
}
