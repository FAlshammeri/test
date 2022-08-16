const passedoverall = [791,391,187,213];
const NotAttendoverall = [265,99,77,89];
const Failedoverall = [46,11,20,15];
const passedposition = [21,175,279,9,225,59,23];
const Notattendposition = [14,85,61,2,95,8,0];
const Failedposition = [0,6,1,4,21,14,0];



function ABPChart () {




	
	
const ctx = document.getElementById('ABPchar').getContext('2d');

const myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Global','ABP','Qassim','ABC'],
        datasets: [{
            label: 'Certified',
            //data: [791,391,187,213],
			data: passedoverall,
			
            backgroundColor: [
                'rgba(0,255,76,0.80)',
							 ],
            borderWidth: 1,
//			barThickness: 60,
        },
		{
            label: 'Failed',
            data: Failedoverall,
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 1,
//			barThickness: 60,
        },
				   {
            label: 'Not Attended',
            data: NotAttendoverall,
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 1,
//			barThickness: 60,
        } ],
		
    },
	  
  options:	{
	  plugins: {
            legend: {
                display: false,
			}
	  },
  	   indexAxis: 'y',
	   responsive: true,
	 	     scales: {
      x: {
        stacked: true,
		display: false,
      },
      y: {
        stacked: true,
		display: true,
      }
    },
	   
  }
	
	
});
}// JavaScript Document




function PosChart () {


const ctx = document.getElementById('PosChar').getContext('2d');

const myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['CR','Helpers','Merchandiser','MS','Preseller','TDS','UM'],
        datasets: [{
            label: 'Certified',
            data: passedposition,
			
            backgroundColor: [
                'rgba(0,255,76,0.80)',
							 ],
            borderWidth: 1,
		//	barThickness: 60,
        },
		{
            label: 'Failed',
            data: Failedposition,
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 1,
	//		barThickness: 60,
        },
				   {
            label: 'Not Attended',
            data: Notattendposition,
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 1,
	//		barThickness: 60,
        } ],
		
    },
	  
  options:	{
	  plugins: {
            legend: {
                display: false,
			}
	  },
  	   indexAxis: 'y',
	   responsive: true,
	 	     scales: {
      x: {
        stacked: true,
		display: false,
      },
      y: {
        stacked: true,
		display: true,
      }
    },
	   
  }
	
	
});
	
	

}


function GradeChart () {


const ctx = document.getElementById('GradeChar').getContext('2d');

const myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['CR','Helpers','Merchandiser','MS','Preseller','TDS','UM'],
        datasets: [{
            label: 'Certified',
            data: passedposition,
			
            backgroundColor: [
                'rgba(0,255,76,0.80)',
							 ],
            borderWidth: 0,
			categoryPercentage: 1.0,
			barPercentage: 1.0
		//	barThickness: 60,
        },
		{
            label: 'Failed',
            data: Failedposition,
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 0,
			categoryPercentage: 1.0,
			barPercentage: 1.0
	//		barThickness: 60,
        },
				   {
            label: 'Not Attended',
            data: Notattendposition,
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 0,
			categoryPercentage: 1.0,
			barPercentage: 1.0
	//		barThickness: 60,
        } ],
		
    },
	  
  options:	{
	 
	  plugins: {
            legend: {
                display: false,
			}
	  },
  	   
	   responsive: true,
	 	     scales: {
      x: {
        stacked: true,
		display: false,
      },
      y: {
        stacked: true,
		display: true,
      }
    },
	   
  }
	
	
});
	
	

}




// JavaScript Document