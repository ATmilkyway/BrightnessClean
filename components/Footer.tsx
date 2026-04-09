
import Link from "next/link";
import { BrushCleaning } from "lucide-react";
import Wrapper1280 from "./1280Wrapper";

const Footer = () => {
  return (
    <footer className="bg-[#22B37E] text-white pt-16 pb-8">
      <Wrapper1280>
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Logo + Description */}
          <div className="max-w-sm">
            <div className="flex items-center gap-2 pb-4">
              <BrushCleaning size={28} />
              <div>
                <h3 className="text-xl font-semibold">
                  Brightness Clean
                </h3>
                <p className="text-sm text-white/80">
                  Cleaning Services company
                </p>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed">
              Stay updated with our latest cleaning tips, service updates,
              and helpful articles on maintaining a spotless home.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col md:flex-row gap-10">
            
            {/* Company */}
            <div>
              <h4 className="font-semibold pb-4">Company</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">Our Team</Link></li>
              </ul>
            </div>

            {/* Know More */}
            <div>
              <h4 className="font-semibold pb-4">Know More</h4>
              <ul className="space-y-2 text-white/80">
                <li><Link href="#">Support</Link></li>
                <li><Link href="#">Privacy Policy</Link></li>
                <li><Link href="#">Terms & Conditions</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="max-w-xs">
              <h4 className="font-semibold pb-4">Newsletter</h4>

              <input
                type="email"
                placeholder="Email Goes here"
                className="w-full bg-transparent border border-white/40 rounded-md px-4 py-2 placeholder:text-white/60 outline-none"
              />

              <button className="mt-3 bg-white text-[#111D15] px-6 py-2 rounded-sm">
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/30 pt-6 text-center text-sm text-white/80">
          @2026 Brightnessclean. All Rights Received
        </div>
      </Wrapper1280>
    </footer>
  );
};

export default Footer;