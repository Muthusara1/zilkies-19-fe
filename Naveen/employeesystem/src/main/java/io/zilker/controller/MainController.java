package io.zilker.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import employee.employee;
import io.zilker.employeesystem.dao.*;

@Controller
public class MainController {

	@RequestMapping(value = "/savedata", method = RequestMethod.GET)
	public String printHello(@RequestParam("fullname") String fullname, @RequestParam("designation") String designation, @RequestParam("manager") String manager) {
		dao daoObj = new dao();
		daoObj.insertIntoTable(fullname, designation, manager);
		return "index";
	}
	
	@RequestMapping(value = "/printdata", method = RequestMethod.GET)
	public String printHello() {
		dao daoObj = new dao();
		employee[] employees = daoObj.getFromTable();
		employee[] tableOrder = new employee[employees.length];
		int index = 0;
		for(int i=0; i<employees.length; i++) {
			if(employees[i].getManager().trim().equals("")) {
				tableOrder[index++] = employees[i];
			}
		}
		for(int i=0; i<index; i++) {
			for(int j=0; j<employees.length; j++) {
				if(employees[j].getManager().equals(tableOrder[i].getName())) {
					tableOrder[index++] = employees[j];
				}
			}
		}
		for(int i=0; i<index; i++) {
			System.out.println(tableOrder[i].getName()+" "+tableOrder[i].getManager());
		}
		return "index";
	}

}
