import { Component, OnInit, OnChanges, SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { CustomerService } from '../service/customer.service';
import { Router } from '@angular/router';
import { PackageService } from 'src/app/package/service/package.service';
// import { constants } from 'buffer';
@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {
  @ViewChild('input3') input3: ElementRef;
  customerFName;
  customerLName = '';
  customerName;
  custPhoneNumber;
  email;
  selectedPKG;
  tripDays;
  tripStart = new Date().toISOString().slice(0, 10);
  tripEnd;
  custPrice;
  custAddress;
  boardingLoc;
  foodOpt;
  travelMode;
  packages;
  r1;
  tripStartMinDate = new Date().toISOString().slice(0, 10);
  // tripStartMaxDate = new Date(2023);
  packageIds = [];
  packageIdmap = {};
  warning = false;
  tripMax = 1;
  selectedPackageTravelOptions = [];
  locality;
  district;
  house;
  packageCost;
  errorMsg ='';
  // countries = ['India', 'China', 'Japan', 'Indonesia'];
  countries = ['Armenia', 'Azerbaijan', 'Bahrain', 'Bangladesh', 'Bhutan', 'Brunei', 'Cambodia', 'China', 'Cyprus', 'Georgia', 'India', 'Indonesia', 'Iran', 'Iraq', 'Israel', 'Japan', 'Jordan', 'Kazakhstan', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Lebanon', 'Malaysia', 'Maldives', 'Mongolia', 'Myanmar', 'Nepal', 'North Korea', 'Oman', 'Pakistan', 'Palestine', 'Philippines', 'Qatar', 'Russia', 'Saudi Arabia', 'Singapore', 'South Korea', 'Sri Lanka', 'Syria', 'Taiwan', 'Tajikistan', 'Thailand', 'Timor Leste', 'Turkey', 'Turkmenistan', 'United Arab Emirates', 'Uzbekistan', 'Vietnam', 'Yemen']
  // states= ['Kerala', 'Karnataka', 'Tamilnadu'];
  states = {
    India: ['Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jammu and Kashmir', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur', 'Meghalaya', 'Mizoram', 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttarakhand', 'Uttar Pradesh', 'West Bengal', 'Andaman and Nicobar Islands', 'Chandigarh', 'Delhi', 'Lakshadweep', 'Puducherry'],
    China: ['Beijing', 'Shanghai', 'Shanxi'],
    Japan: ['Tohoku', 'Tottori', 'Saitama'],
    Indonesia: ['Bali', 'Papua', 'Lampung']
  };
  // loc= ['l1', 'l2', 'l3'];
  // dist = ['Ernakulam', 'trivandrum', 'Calicut'];
  districts = {
    Kerala: [
      'Kannur',
      'Kasaragod',
      'Kollam',
      'Kottayam',
      'Kozhikode',
      'Malappuram',
      'Palakkad',
      'Pathanamthitta',
      'Ernakulam'
    ],
    karnataka: [
      'Bagalkot',
      'Ballari',
      'Belagavi',
      'Bengaluru',
      'Bengaluru',
      'Bidar',
      'Chamarajanagar',
      'Chikballapur'
    ],
    tamilnadu: [
      'Ariyalur',
      'Chengalpattu',
      'Chennai',
      'Coimbatore',
      'Cuddalore',
      'Dharmapuri',
      'Dindigul',
      'Erode'
    ]
  };
  localities = {
    Ernakulam: ['Fortkochi', 'Mattancherry', 'Vypin', 'Highcourt', 'Kaloor', 'Palarivattom', 'Edappalli', 'Vytilla']
  };
  // india = ['Kerala', 'Karnataka', 'Tamilnadu'];
  // kerala = ['Ernakulam', 'trivandrum', 'Calicut'];
  // karnataka = ['Bagalkot', 'Ballari', 'Belagavi'];
  // tamilnadu = ['Ariyalur', 'Chengalpattu', 'Chennai'];
  // china = ['Beijing', 'Shanghai', 'Shanxi'];
  // beijing = ['Dongcheng', 'Xicheng', 'Shijingshan'];
  // shanghai = ['Huangpu', 'Xuhui', 'Changning'];
  // shanxi = ['Xinghualing', 'Pingcheng', 'Cheng'];
  // japan = ['Tohoku', 'Tottori', 'Saitama'];
  // tohoku = ['Sendai', 'Iwaki', 'Koriyama'];
  // tottori = ['Hino', 'Iwami', 'Yazu'];
  // saitama = ['Chichibu', 'Iruma ', 'Hiki'];
  // Indonesia = ['Bali', 'Papua', 'Lampung'];
  // bali = ['Seminyak', 'Nusa Dua', 'nSanur'];
  // papua = ['Daulo', 'Goroka', 'Henganofi'];
  // lampung = ['South Lampung', 'Tulang Bawang', 'Way Kanan'];
  country;
  state;
  selectedFoodOptions = [];
  packageSublocations = [];
  packageFoodOptions = [];
  selectedSublocationOptions = [];
  editCustomerDetails = {};
  customerPrice;
  mailId;
  errorMessage = '';
  currentCustomerId;
  newId;
  custType;
  isEdit = false;
  constructor(private custService: CustomerService,
    private custroute: Router,
    private pckService: PackageService) { 
      const navigation = this.custroute.getCurrentNavigation();
      if(navigation && navigation.extras && navigation.extras.state){
        const { state } =navigation.extras;
        if(state['customer']){
          this.isEdit = true;
          this.editCustomerDetails = state['customer'];
          const nameArray = state['customer'].customerName.split('\t');
          console.log(nameArray);
          this.customerFName =nameArray[0];
          this.customerLName =nameArray[1];
          this.custPhoneNumber = state['customer'].phoneNumber;
          this.email = state['customer'].email;
          this.boardingLoc = state['customer'].boardingLocation;
          const addressArray = state['customer'].address.split('\t');
          console.log(addressArray);
          this.house = addressArray[0];
          this.locality=addressArray[1];
          this.district = addressArray[2];
          this.state =addressArray[3];
          this.country =addressArray[4];
          // this.house = state['customer'].address;
          this.selectedPKG = state['customer'].selectedPackage;
          this.travelMode = state['customer'].travelMode;
          this.selectedFoodOptions = state['customer'].foodOptions;
          this.tripDays = state['customer'].tripDays;
          this.selectedSublocationOptions = state['customer'].sublocations;
          this.customerPrice = state['customer'].price;
          this.currentCustomerId = state['customer'].customerId;
          
        }
      }
    }

  ngOnInit(): void {
    this.getPackages();
    if(!this.isEdit){
      this.getCustId();
    }  
    else{

    } 
  }
  addCust() {
    if(this.customerLName === ''){
      this.errorMsg = 'This field is mandatory';
    }
    else{
      const customer = this.getCustomerObject();
      this.custService.addNewCustomer(customer);
      this.custroute.navigate(['/customer']);
      console.log(customer);
    }
    
  }
  getCustomerObject(){
    return {
      customerId: this.currentCustomerId,
      customerType:this.custType,
      customerName: this.customerFName.concat('\t', this.customerLName),
      phoneNumber: this.custPhoneNumber,
      email: this.mailId,
      selectedPackage: this.selectedPKG,
      tripDays: this.tripDays,
      tripStartDate: this.tripStart,
      tripEndDate: this.tripEnd,
      price: this.customerPrice,
      address: this.house + '\t'+this.locality+'\t'+ this.district +'\t'+this.state+'\t'+this.country,
      boardingLocation: this.boardingLoc,
      foodOptions: this.selectedFoodOptions,
      sublocations: this.selectedSublocationOptions,
      travelMode: this.travelMode
    }

  }

  getPackages() {
    this.pckService.fetchPackages().subscribe((pkgs) => {
      this.packages = pkgs;
      pkgs.forEach((pkg) => {
        this.packageIdmap[pkg.pkgId] = pkg.pkdName;
      })
      // console.log('PackageIdmap', this.packageIdmap);
      // console.log('package2', this.packageIdmap['PKG_2']);
      if(this.isEdit){
        this.changePackage();
      }
    })
  }

  changePackage() {
    this.packages.forEach((pkg) => {
      if (pkg.pkgId === this.selectedPKG) {
        if(!this.isEdit){
        this.customerPrice = pkg.price;
        this.tripDays = pkg.tripDays;
        this.selectedFoodOptions = [...pkg.foodOptions];
        this.selectedSublocationOptions = [...pkg.subLocations];
        }
        this.selectedPackageTravelOptions = pkg.travelOptions;
        this.tripMax = pkg.tripDays;
        this.packageCost = pkg.price;

        // console.log('Selected Package', pkg);
        // console.log('Travel Options', this.selectedPackageTravelOptions);
        this.packageFoodOptions = [...pkg.foodOptions];
        this.packageSublocations = [...pkg.subLocations];
        // console.log('FoodOptions', this.packageFoodOptions);
        // console.log('Sublocations', this.packageSublocations);

      }
    });

  }
  updateFoodOption(fdopt) {

    if (this.selectedFoodOptions.includes(fdopt)) {
      const index = this.selectedFoodOptions.indexOf(fdopt);
      this.selectedFoodOptions.splice(index, 1);
      this.customerPrice = (this.customerPrice - ((this.packageCost * 10) / 100));
    }
    else {
      this.selectedFoodOptions.push(fdopt);
      this.customerPrice = (this.customerPrice + ((this.packageCost * 10) / 100));

    }
    console.log('SelectedFoodOptions', this.selectedFoodOptions);
  }
  updateSubLocation(subloc) {
    if (this.selectedSublocationOptions.includes(subloc)) {
      const index = this.selectedSublocationOptions.indexOf(subloc);
      this.selectedSublocationOptions.splice(index, 1);
      this.customerPrice = (this.customerPrice - ((this.packageCost * 10) / 100));
      this.tripDays--;
    }
    else {
      this.selectedSublocationOptions.push(subloc);
      this.customerPrice = (this.customerPrice - ((this.packageCost * 10) / 100));
      this.tripDays++;
    }
    console.log('selectedSublocations', this.selectedSublocationOptions);
  }
  validateEmailId(val) {
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log('mail', val);
    if (val.match(mailFormat)) {
      this.mailId = val;
    }
    else {
      this.errorMessage = 'You have entered an Invalid email Id';
      setTimeout(() => {
        this.errorMessage = '';
      }, 2000);
    }
  }
  getCustId() {
    this.custService.getExsistingCustomerIds().subscribe((custIds) => {
      const ids: number[] = [];
      custIds.forEach((custId) => {
        console.log('split', custId.split('_'));
        const id = custId.split('_')[1];
        ids.push(parseInt(id));
      })
      const newId:number = Math.max(...ids) + 1;
      console.log(newId);
      // return 'PKG_'+newId;
      this.currentCustomerId = 'CUST_' +'00000' +newId;
    })
    // return this.currentCustomerId;
  }
  updateCust(){
    const customer = this.getCustomerObject();
    this.custService.updateCustomer(this.currentCustomerId,customer);
    this.custroute.navigate(['/customer']);
  }
}