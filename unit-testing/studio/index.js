
let launchcode = {
  organization: 'nonprofit',
  executiveDirector: 'Jeff',
  percentageCoolEmployees: 100,
  programsOffered: ["Web Development", "Data Analysis", "Liftoff"],
  launchOutput: function (num){
    /*let arr = ['Launch', 'Code', 'Rocks'];
    let str = '';
    if(num%2===0)
        str += arr[0];
    else if(num%3===0)
        str += arr[1];
    else if(num%5===0)
        str += arr[2];*/
    if (num%2===0&&num%5===0&&num%3===0){
            return 'LaunchCode Rocks!';
        }
    if (num%2===0&&num%3===0){
        return 'LaunchCode!';
    }
    if (num%3===0&&num%5===0){
        return 'Code Rocks!';
    }
    
    if (num%2===0&&num%5===0){
        return 'Launch Rocks! (CRASH!!!!)';
    }

    if (num%2===0){
        return 'Launch!';
    }
    if(num%3===0){
        return 'Code!';
    }
    if(num%5===0){
        return 'Rocks!';
    }
    /*if(str ==='')
        return `Rutabagas! That doesn't work.`;
    else 
        return str +'!';*/

        return `Rutabagas! That doesn't work.`;
  }
}

module.exports = launchcode;

