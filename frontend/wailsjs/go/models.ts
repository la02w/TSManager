export namespace utils {
	
	export class Server {
	    name: string;
	    url: string;
	    api: string;
	
	    static createFrom(source: any = {}) {
	        return new Server(source);
	    }
	
	    constructor(source: any = {}) {
	        if ('string' === typeof source) source = JSON.parse(source);
	        this.name = source["name"];
	        this.url = source["url"];
	        this.api = source["api"];
	    }
	}

}

