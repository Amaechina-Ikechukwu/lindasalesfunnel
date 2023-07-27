import Text from "@/style/Text";
import Button from "@/style/Button";
import colors from "@/constants/Colors"

export default function Page() {
	 
  return (
   <div className='container' >
      <Button color=' bg-linda' px={'px-4'} py={'py-3'} textColor='text-first' radius='rounded-xl' shadowBool={true}  hoverShadow={true} icon={<p>fuck</p>} >
        Open Dialog

      </Button>
    Save changes
<form>
  <label className="block">
    <span className="block text-sm font-medium text-slate-700">Username</span>
    
    <input type="text" value="tbone"  className=" mt-1 block w-full px-3 py-2 bg-offwhite rounded-xl text-sm drop-shadow-sm h-12 placeholder-slate-200
      focus:outline-none focus:border focus:border-greenBackShade focus:ring-1 focus:ring-red-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
  </label>
 
</form>    </div>
  );
}
