
function ABPChart () {


const ctx = document.getElementById('ABPchar').getContext('2d');

const myChart = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['Global','ABP','Qassim','ABC'],
        datasets: [{
            label: 'Certified',
            data: [791,391,187,213],
			
            backgroundColor: [
                'rgba(0,255,76,0.80)',
							 ],
            borderWidth: 1,
			barThickness: 60,
        },
		{
            label: 'Failed',
            data: [46,11,20,15],
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 1,
			barThickness: 60,
        },
				   {
            label: 'Not Attended',
            data: [265,99,77,89],
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 1,
			barThickness: 60,
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