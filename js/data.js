data = {};

data.queue = (function() {
    this.queue = [];
    this.lastConsumed;
    
    this.clear = function() {
        this.queue.length = 0;   
    }
    
    this.getLastConsumed = function() {
        return this.lastConsumed;   
    }
    
    this.isEmpty = function() {
        return this.queue.length == 0;   
    }
    
    this.size = function() {
        return this.queue.length;   
    }
    
    this.push = function(data) {
        this.queue.push(data);
    }
    
    this.consume = function(consume) {
        if(!this.isEmpty()) {
            var d = queue.shift();
            this.lastConsumed = d;
            if(d) {
                consume(d);
                return true;
            }
        }
        
        return false;
    }
    
    return this;
})();

data.requestor = (function() {
    this.lastStartDate = null;
    
    this.requestNewData = function(startDate, filename, callback, firstCall) {
        if(startDate == this.lastStartDate) return;
        
        this.lastStartDate = startDate;
        axios.get(filename)
            .then(function (response) {
                if(startDate != this.lastStartDate) return;
            
                for (var key in response.data) {
                    var d = moment.utc(key);
                    if(d > startDate) { 
                        data.queue.push([response.data[key], {'first_call': firstCall, 'date': d}]);
                        firstCall = false;
                    }
                }
                if(callback) callback();
                this.lastStartDate = null;
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    
    return this;
})();
    
data.index = (function() {
    this.indexKeys = {}
    this.indexValues = {}
    this.currentCategory = 'default';

    this.buildIndex = function(bootstrapper) {
        axios.get('/data/index.json')
            .then(function (response) {
                this.indexKeys = [];
                this.indexValues = [];
                for(var categoryKey in response.data) {
                    this.indexKeys[categoryKey] = [];
                    this.indexValues[categoryKey] = [];
                    for(var key in response.data[categoryKey]) {
                        this.indexKeys[categoryKey].push(moment.utc(key));
                        this.indexValues[categoryKey].push(response.data[categoryKey][key]);
                    }
                }

                bootstrapper(this.indexKeys[this.currentCategory][0], this.indexValues[this.currentCategory][0]);
            })
            .catch(function (error) {
                console.log(error);
                this.buildIndex();
            });
    }

    this.getFileNameByDate = function(category, date) {
        this.currentCategory = category;
        var idx = this.binarySearch(this.indexKeys[category], date);
        return this.indexValues[category][Math.max(idx, 0)];
    }

    this.getNextFileNameByDate = function(date) {
        var idx = this.binarySearch(this.indexKeys[this.currentCategory], date);
        return this.indexValues[this.currentCategory][idx + 1];
    }

    this.binarySearch = function(indexKeys, val) {
        var start = 0;
        var end = indexKeys.length;
        var mid;
        while(start <= end) {
            mid = Math.floor(start + (end - start)/2);

            if(indexKeys[mid] == val || indexKeys[mid] < val && indexKeys[mid + 1] > val)
                return mid;

            if(indexKeys[mid] > val)
                end = mid - 1;
            else
                start = mid + 1;
        }

        return -1;
    }

    return this;
})();