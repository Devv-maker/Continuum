import { Component, OnInit } from '@angular/core';
import data from '../../../fake-data/default-data.json';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  fullData: any = data;
  currentNode: any = null;

  // dropdown lists
  serviceTypes: string[] = [];
  areas: string[] = [];
  ages: string[] = [];
  costs: string[] = [];
  serviceAreas: string[] = [];
  transportation: string[] = [];
  agencies: string[] = [];
  programs: string[] = [];

  // selected values
  selectedService = '';
  selectedArea = '';

  ngOnInit() {
    this.initFilters();
  }

  // INIT SERVICE TYPES
  initFilters() {
    console.log(this.currentNode)
    this.serviceTypes = Object.keys(this.fullData).sort();
  }

  // SERVICE CHANGE
  onServiceChange() {
    this.resetLowerDropdowns();
    this.selectedArea = '';
    this.currentNode = null;

    if (!this.selectedService) return;

    this.areas = Object.keys(this.fullData[this.selectedService] || {}).sort();
  }

  // AREA CHANGE
  onAreaChange() {
    if (!this.selectedService || !this.selectedArea) {
      this.resetLowerDropdowns();
      this.currentNode = null;
      return;
    }

    this.currentNode = this.fullData[this.selectedService][this.selectedArea];

    this.ages = this.getUnique(this.currentNode?.ages_served);
    this.costs = this.getUnique(this.currentNode?.cost);
    this.serviceAreas = this.getUnique(this.currentNode?.service_area);
    this.transportation = this.getUnique(this.currentNode?.transportation);
    this.agencies = this.getUnique(this.currentNode?.agency);
    this.programs = this.getUnique(this.currentNode?.program);
  }

  // HELPERS
  getUnique(arr: any[] = []) {
    return [...new Set(arr)].sort();
  }

  resetLowerDropdowns() {
    this.areas = [];
    this.ages = [];
    this.costs = [];
    this.serviceAreas = [];
    this.transportation = [];
    this.agencies = [];
    this.programs = [];
  }

  resetFilters() {
    this.selectedService = '';
    this.selectedArea = '';
    this.resetLowerDropdowns();
    this.currentNode = null;
  }
}
