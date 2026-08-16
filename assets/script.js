
document.addEventListener("DOMContentLoaded",()=>{
 const nav=document.querySelector(".navbar"); const onScroll=()=>nav?.classList.toggle("scrolled",scrollY>20); onScroll(); addEventListener("scroll",onScroll,{passive:true});
 const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");obs.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll(".reveal").forEach(e=>obs.observe(e));
 const form=document.getElementById("enquiryForm");
 if(form) form.addEventListener("submit",e=>{e.preventDefault();if(!form.checkValidity()){form.classList.add("was-validated");return}document.getElementById("formMessage").innerHTML='<div class="alert alert-success">Thank you! Your enquiry has been recorded. Our team will contact you shortly.</div>';form.reset()});
});
