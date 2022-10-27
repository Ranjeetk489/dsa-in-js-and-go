// // package main

// // import (
// // 	"fmt"
// // 	str "strings" // Package Alias
// // 	"math"
// // )
// // const s string = "constant";
// // func main() {
// // 	f:="apple"
// // 	fmt.Println(str.Count("Go is Awesome. I love Go", "Go"), f,s)
// // 	fmt.Println(math.Pi)
// // 	for {
// // 		fmt.Println("Hello World")
// // 		break
// // 	}
// // 	for j:=8; j<=9; j++ {
// // 		fmt.Println(j)
// // 	}
// // 	for n:=0; n<=12; n++ {
// // 		if n<10 { continue }
// // 		fmt.Println(n)
// // 	}

// // 	//switch
// // 	i:=2
// // 	switch i {
// // 	case 1: fmt.Println("position is ", i)
// // 	default: fmt.Println("position is", i)
// // 	}

// //		var a [5]bool
// //		a[2] = true
// //		fmt.Println("emp:",a, len(a));
// //		S:= make([]int, 3)
// //		fmt.Println("emp : ", S)
// //		//map
// //		m:=make(map[string]int)
// //		m["k1"] = 7
// //		m["k2"] = 14
// //		m["k3"] = 21
// //		_, prs := m["k2"]
// //	    fmt.Println("prs:", prs)
// //		fmt.Println(len(m))
// //		fmt.Println(m["k1"])
// //	}
// package main

// import (
// 	"fmt"
// 	"log"
// 	"net/http"
// 	"strconv"
// )

// // Define a home handler function which writes a byte slice containing
// // "Hello from Snippetbox" as the response body.

// func home(w http.ResponseWriter, r *http.Request) {
// 	if r.URL.Path != "/" {
// 		http.NotFound(w, r)
// 		return
// 	}
// 	w.Write([]byte("Hello from Snippetbox"))

// }

// func specificPage(w http.ResponseWriter, r *http.Request) {
// 	if r.Method != "POST" {
// 		w.Header().Set("Allow", http.MethodPost)
// 		w.Header()["X-xSS-Protection"] = []string{"1; mode=block"}
// 		w.Header().Add("xss-prot", "well")
// 		// w.WriteHeader(405)
// 		// w.Write([]byte("Method Not allowed"))
// 		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
// 		return
// 	}
// 	w.Write([]byte("You have visited a specific page"))
// }

// func createStuff(w http.ResponseWriter, r *http.Request) {
// 	id, err := strconv.Atoi(r.URL.Query().Get("id"))

// 	if err != nil || id < 1 {
// 		http.NotFound(w, r)
// 		return
// 	}
// 	fmt.Fprintf(w, "got the id with %d..", id)
// }

// func main() {
// 	// Use the http.NewServeMux() function to initialize a new servemux, then
// 	// register the home function as the handler for the "/" URL pattern.
// 	fmt.Println('o')
// 	mux := http.NewServeMux()
// 	mux.HandleFunc("/", home)
// 	// Use the http.ListenAndServe() function to start a new web server. We pass in
// 	mux.HandleFunc("/specific", specificPage)
// 	mux.HandleFunc("/github.com", createStuff)
// 	log.Print("Starting server on :4000")
// 	err := http.ListenAndServe(":4000", mux)
// 	log.Fatal(err)
// }

package main

import (
	"fmt"
)

func main() {
	res := GetCount("hey developeree")
	fmt.Println(res)
}
