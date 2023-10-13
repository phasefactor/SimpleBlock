//
//  ContentView.swift
//  SimpleBlock
//
//  Created by user on 10/12/23.
//

import SwiftUI

struct ContentView: View {
    var body: some View {
        
    #if os(iOS)
    // Instructions for enabling the extension on iOS
        
            VStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundStyle(.tint)
                Text("Hello, world!")
                Link("Open Settings > Safari", destination: URL(string: "prefs:root=SAFARI")!)

            
            }
            .padding()
    #else
    // Instructions for enabling the extension on macOS
        
            VStack {
                Image(systemName: "globe")
                    .imageScale(.large)
                    .foregroundStyle(.tint)
                Text("Hello, world!")
            }
            .padding()
    #endif
    }
}

#Preview {
    ContentView()
}
