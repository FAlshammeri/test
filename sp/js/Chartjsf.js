
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
            borderWidth: 1
        },
		{
            label: 'Failed',
            data: [11],
            backgroundColor: [
                'rgba(255,0,0,0.80)',
                             ],
        
            borderWidth: 1
        },
				   {
            label: 'Not Attended',
            data: [99],
            backgroundColor: [
                'rgba(255,0,0,0.45)',
							 ],
            borderWidth: 1
        } ],
		
    },
  options: {
	   plugins: {
		   
	
      title: {
        display: true,
        text: 'ABP',
      },
	legend: {
		position: 'bottom',
		align: 'center'
		
	}
    }
  }
	
	
});
}// JavaScript Document