 console.log("Aaiye Javascript ke Data types ko  in depth smjhte hai ...");

//                primitive            +           non - primitive
//                 | string                                  | Array
//                 | boolean                                 | Object
//                 | number                                  |  Function
//                 | undefined                               
//                 | symbol                                  
//                 | null                                    
//                 |bigint                                   

//   PRIMITIVE

                                // string
                                let str = "cp bhai ";
                                console.log(str);

                                // booleann
                                let isTrue = true;
                                console.log(isTrue);

                                // number

                                let a = 5;
                                console.log(a);

                                // undefined
                                let b ;
                                console.log(b);

                                //  symbol
                                let id = Symbol("id1");
                                console.log(id);

                                // bigint

                                let d= 1236544897865434111111111115333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333448944444444444n;
                                console.log(d);


//  NON PRIMITIVE


                // ARRAY
                let arr = [1,2,3,4,56 , "CP " , 5.7]
                console.log(arr);

                let arr1 = [10, 20, 30];
                console.log(arr1);      // [10, 20, 30]
                console.log(typeof arr1); // "object"

                //  OBJECT

                let student={
                    name : "CP",
                    age: 22,
                    sex:"male"
                }
                console.log(student);
                console.log(typeof student);


                // FUNCTION

                 function add(){
                   console.log("hii");
                }

                add();