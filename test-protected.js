async function run() {
    try {
        console.log("Fetching token...");
        const resToken = await fetch('http://localhost:3000/auth/token');
        const { token } = await resToken.json();
        console.log("Got Token:", token);
        
        console.log("\nAccessing protected route with token...");
        const resProtected = await fetch('http://localhost:3000/protected', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const data = await resProtected.json();
        console.log("\nProtected Route Response:");
        console.log(data);
    } catch(err) {
        console.error("Error:", err);
    }
}
run();
