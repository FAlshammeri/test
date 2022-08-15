
function ABPChart () {


const ctx = document.getElementById('ABPchar').getContext('2d');

const myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Certified'],
        datasets: [{
            label: 'Certified',
            data: [391],
            backgroundColor: [
                'rgba(0,255,76,0.80)',
							 ],
            borderWidth: 1,
			barThickness: 60,
        },
		{
            label: 'Failed',
            data: [11],
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 1,
			barThickness: 60,
        },
				   {
            label: 'Not Attended',
            data: [99],
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 1,
			barThickness: 60,
        } ],
		
    },
	  
  options:	{
	  	   indexAxis: 'y',
	 	     scales: {
      x: {
        stacked: true,
		display: false,
      },
      y: {
        stacked: true,
		display: false,
      }
    },
	   
  }
	
	
});
}// JavaScript Document